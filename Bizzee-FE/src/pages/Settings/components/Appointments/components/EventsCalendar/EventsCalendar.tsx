import React, { ComponentType, FC, memo, useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Calendar,
  NavigateAction,
  View,
  Views,
  dateFnsLocalizer,
  Event,
  Navigate,
  ToolbarProps,
  ResourceHeaderProps,
  EventProps,
} from "react-big-calendar";
import {
  addDays,
  addWeeks,
  startOfToday,
  startOfWeek,
  subDays,
  subWeeks,
  format,
  parse,
  getDay,
} from "date-fns";
import {
  locales,
  timeSlots,
  weekMinutesStep,
  dayMinutesStep,
  viewNavigateStep,
  MONDAY,
} from "./constants";
import {
  Formats,
  ICalendarProps,
  ICustomEvent,
  IEventsByStartDatetime,
  IEventsResource,
} from "./types";
import { Box, useMediaQuery } from "@mui/material";
import { TimeSlotWrapper } from "./components/TimeSlotWrapper";
import { MobileToolbar } from "./components/MobileToolbar";
import { styles } from "./EventsCalendar.styled";
import { MainToolbar } from "./components/MainToolbar";
import { DayResourceHeader } from "./components/DayResourceHeader";
import { DayEvent } from "./components/DayEvent";
import { useDispatch } from "react-redux";
import {
  eventsResourcesAction,
  getEventsAction,
  isDayViewAction,
} from "features/appointments/actions";
import { DayTimeSlot } from "./components/DayTimeSlot";
import { appointmentOnlyHoursDateFormat } from "config/constants";
import { useSelector } from "react-redux";
import {
  selectIsDayView,
  selectResources,
} from "features/selectors/appointmentsSelectors";

export const EventsCalendar: FC<ICalendarProps> = memo(
  ({ appointments, currentDate, setCurrentDate }) => {
    const workTimeStart = new Date("2024-02-15T09:00:00");
    const workTimeEnd = new Date("2024-02-15T19:00:00");
    const [eventsList, setEventsList] = useState<ICustomEvent[]>([]);
    const resourceMap = useSelector(selectResources);
    const isDayView = useSelector(selectIsDayView);

    const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek: () => currentDate,
      getDay,
      locales,
    });

    const isMobile = useMediaQuery("(max-width: 767px)");
    const dispatch = useDispatch();

    const components = isDayView
      ? {
          toolbar: MainToolbar as ComponentType<ToolbarProps<Event, object>>,
          timeSlotWrapper: DayTimeSlot as ComponentType,
          resourceHeader:
            DayResourceHeader as ComponentType<ResourceHeaderProps>,
          day: {
            event: DayEvent as ComponentType<EventProps>,
          },
        }
      : {
          toolbar: MainToolbar as ComponentType<ToolbarProps<Event, object>>,
          timeSlotWrapper: TimeSlotWrapper as ComponentType,
        };

    const formats: Formats = {
      dayRangeHeaderFormat: ({ start, end }, culture, localizer) => {
        return (
          localizer?.format(start, "MMMM d", culture) +
          " - " +
          localizer?.format(end, "MMMM d", culture)
        );
      },
      timeGutterFormat: (date, culture, localizer) =>
        localizer?.format(date, "HH:mm", culture) ?? "",
    };

    useEffect(() => {
      const newEventsList: ICustomEvent[] = [];
      const newResourceMap: IEventsResource[] = [];
      const eventsByStartDatetime: IEventsByStartDatetime = {};
      const eventsByHour: IEventsByStartDatetime = {};

      for (const event of appointments) {
        const { id, startDatetime, endDatetime, master } = event;

        const eventObj = {
          id: id,
          start: new Date(startDatetime),
          end: new Date(endDatetime),
          title: master.name,
          color: `#${master.color.title}`,
          resourceId: master.id,
          fullInfo: event,
        };
        newEventsList.push(eventObj);

        if (
          !newResourceMap.some((resource) => resource.resourceId === master.id)
        ) {
          const resourceObj = {
            resourceId: master.id,
            resourceTitle: master.name,
            color: master.color.title,
          };
          newResourceMap.push(resourceObj);
        }

        if (!eventsByStartDatetime[startDatetime]) {
          eventsByStartDatetime[startDatetime] = [];
        }
        eventsByStartDatetime[startDatetime].push(event);

        const startDatetimeObj = new Date(event.startDatetime);
        const hourKey = format(
          startDatetimeObj,
          appointmentOnlyHoursDateFormat,
        );

        if (!eventsByHour[hourKey]) {
          eventsByHour[hourKey] = [];
        }

        eventsByHour[hourKey].push(event);
      }

      setEventsList(newEventsList);
      dispatch(eventsResourcesAction(newResourceMap));
      dispatch(
        getEventsAction({
          eventsByStartDatetime,
          eventsByHour,
        }),
      );
    }, [appointments]);

    const handleOnView = (view: View) => {
      const isDayView = view === Views.DAY;

      dispatch(isDayViewAction(isDayView));
    };

    const handleOnNavigate = (
      newDate: Date,
      view: View,
      action: NavigateAction,
    ) => {
      const today = startOfToday();

      if (view === Views.DAY) {
        const tomorrow = addDays(currentDate, viewNavigateStep);
        const yesterday = subDays(currentDate, viewNavigateStep);

        if (action === Navigate.NEXT) {
          setCurrentDate(tomorrow);
        } else if (action === Navigate.PREVIOUS) {
          setCurrentDate(yesterday);
        } else if (action === Navigate.TODAY) {
          setCurrentDate(today);
        } else if (action === Navigate.DATE) {
          setCurrentDate(newDate);
        }
      }

      if (view === Views.WEEK) {
        const mondayOfTodayWeek = startOfWeek(today, {
          weekStartsOn: MONDAY,
        });
        const nextWeekDate = addWeeks(currentDate, viewNavigateStep);
        const previousWeekDate = subWeeks(currentDate, viewNavigateStep);

        if (action === Navigate.NEXT) {
          setCurrentDate(nextWeekDate);
        } else if (action === Navigate.PREVIOUS) {
          setCurrentDate(previousWeekDate);
        } else if (action === Navigate.TODAY) {
          setCurrentDate(mondayOfTodayWeek);
        } else if (action === Navigate.DATE) {
          setCurrentDate(newDate);
        }
      }
    };

    const handleMobileOnNavigate = (
      newDate: Date,
      view: View,
      action: NavigateAction,
    ) => {
      const today = startOfToday();

      if (view === Views.DAY) {
        const nextWeekDate = addWeeks(currentDate, viewNavigateStep);
        const previousWeekDate = subWeeks(currentDate, viewNavigateStep);

        if (action === Navigate.NEXT) {
          setCurrentDate(nextWeekDate);
        } else if (action === Navigate.PREVIOUS) {
          setCurrentDate(previousWeekDate);
        } else if (action === Navigate.TODAY) {
          setCurrentDate(today);
        } else if (action === Navigate.DATE) {
          setCurrentDate(newDate);
        }
      }
    };

    return (
      <Box>
        <Box
          display={isMobile ? "block" : "none"}
          sx={styles.mobileCalendarWrapper}
        >
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.DAY}
            views={{
              day: true,
            }}
            min={workTimeStart}
            max={workTimeEnd}
            step={dayMinutesStep}
            timeslots={timeSlots}
            scrollToTime={workTimeStart}
            components={{
              timeSlotWrapper: TimeSlotWrapper as ComponentType,
              toolbar: MobileToolbar as ComponentType<ToolbarProps>,
            }}
            date={currentDate}
            formats={formats}
            onNavigate={handleMobileOnNavigate}
          />
        </Box>
        <Box
          display={isMobile ? "none" : "block"}
          sx={[
            styles.desktopCalendarWrapper,
            isDayView
              ? styles.desktopCalendarDayWrapper
              : styles.desktopCalendarWeekWrapper,
          ]}
        >
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.WEEK}
            views={{
              week: true,
              day: true,
            }}
            min={workTimeStart}
            max={workTimeEnd}
            step={isDayView ? dayMinutesStep : weekMinutesStep}
            timeslots={timeSlots}
            onView={handleOnView}
            scrollToTime={workTimeStart}
            components={components}
            date={currentDate}
            formats={formats}
            onNavigate={handleOnNavigate}
            events={isDayView && eventsList.length ? eventsList : undefined}
            resources={
              isDayView && resourceMap.length ? resourceMap : undefined
            }
            resourceIdAccessor={
              "resourceId" as unknown as
                | ((resource: object) => object)
                | undefined
            }
            resourceTitleAccessor={
              "resourceTitle" as unknown as
                | ((resource: object) => object)
                | undefined
            }
          />
        </Box>
      </Box>
    );
  },
);
