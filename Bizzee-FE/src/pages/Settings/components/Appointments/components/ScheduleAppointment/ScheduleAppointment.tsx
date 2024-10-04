import { styles } from "./ScheduleAppointment.styled";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Paper,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { FC, memo, useEffect, useState } from "react";
import {
  BusinessUnit,
  IProcedure,
  IScheduleAppointment,
} from "./ScheduleAppointmentTypes";
import { CloseBtn } from "components/CloseBtn";
import { AuthInput } from "pages/Layout/components/AuthInput";
import { CountryCodeSelect } from "pages/Layout/components/CountryCodeSelect";
import { useFormik } from "formik";
import { IFormValues } from "./ScheduleAppointmentTypes";
import {
  initialValues,
  notificationMenu,
  MAX_DESC_LENGTH,
  appointmentStatuses,
} from "./constants";
import { validationSchema } from "./validationSchema";
import { useTypedDispatch } from "store";
import { getBusinessUnits } from "api/BusinessUnits/getBusinessUnits";
import { SmartSearch } from "../SmartSearch";
import { TimeSmartSearch } from "./TimeSmartSearch";
import { getBusinessUnitProcedures } from "api/Calendar/getBusinessUnitProcedures";
import { AppointmentDateInput } from "./AppointmentDateInput";
import { getTimeForAppointment } from "api/Calendar/getTimeForAppointment";
import { getMastersForAppointment } from "api/Calendar/getMastersForAppointment";
import { ClientsSmartSearch } from "./ClientsSmartSearch";
import { getBusinessUnitClients } from "api/Calendar/getBusinessUnitClients";
import { IClientValues } from "./ClientsSmartSearch/types";
import {
  DEFAULT_CURRENCY,
  MAX_PHONE_LENGTH,
  MAX_PRICE_LENGTH,
} from "config/constants";
import { MAX_FULLNAME_LENGTH } from "pages/AuthPage/constants";
import { onKeyPressHandler } from "utils";
import { MainRadioGroup } from "components/MainRadioGroup";
import { TextAreaInput } from "pages/Layout/components/TextAreaInput/TextAreaInput";
import { SelectInput } from "pages/Layout/components/SelectInput/SelectInput";
import { formatAppointmentDate, parseDateString } from "utils/formatDate";
import { colors } from "config/styles/themeColors";
import { createAppointment } from "api/Calendar/createAppointment";
import { useSelector } from "react-redux";
import {
  selectCreateTime,
  selectIsCreateWindowOpen,
  selectIsEditWindowOpen,
} from "features/selectors/appointmentsSelectors";
import {
  isEditWindowOpenAction,
  toggleCreateWindowOpenAction,
} from "features/appointments/actions";
import { endOfMonth, format } from "date-fns";
import { MainModal } from "components/MainModal";
import { IValues } from "../SmartSearch/types";
import { getBusyDays } from "api/Calendar/getBusyDays";
import { useNotificationToast } from "hooks/useNotificationToast";
import { Title } from "components/Title/Title";
import { addClientStyles } from "pages/Settings/components/Clients/components/AddClient/AddClient.styled";
import { getInfoForSchedulingDetails } from "api/Calendar/getInfoForSchedulingDetails";
import { updateAppointment } from "api/Calendar/updateAppointment";

export const ScheduleAppointment: FC<IScheduleAppointment> = memo(
  ({
    businessId,
    masterId,
    master,
    setSelectedMasterInAppointments,
    updateAppointments,
    appointmentDetails,
  }) => {
    const isTabletScreen = useMediaQuery("(min-width: 768px)");
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");
    const isXlScreen = useMediaQuery("(min-width: 1920px)");
    const dispatch = useTypedDispatch();
    const [businessName, setBusinessName] = useState("");
    const [businessUnits, setBusinessUnits] = useState<BusinessUnit[]>([]);
    const [selectedMasterId, setSelectedMasterId] = useState<number | null>(
      null,
    );
    const [selectedMaster, setSelectedMaster] = useState<string | null>(null);
    const [procedureId, setProcedureId] = useState<number | null>(null);
    const [procedureIds, setProcedureIds] = useState<string>("");
    const [timeList, setTimeList] = useState<[]>([]);
    const [clients, setClients] = useState<IClientValues[]>([
      {
        id: Number(initialValues.clientId),
        email: initialValues.email,
        name: initialValues.name,
        countryCode: initialValues.countryCode,
        phone: initialValues.phone,
      },
    ]);
    const [client, setClient] = useState<IClientValues | undefined>(undefined);
    const [clientInfo, setClientInfo] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [initialMaster, setInitialMaster] = useState<IValues | undefined>(
      undefined,
    );
    const [initialService, setInitialService] = useState<IValues | undefined>(
      undefined,
    );
    const [isLeaveModalOpen, setIsLeaveModalOpen] = useState<boolean>(false);
    const [busyDays, setBusyDays] = useState<string[]>([]);
    const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false);
    const [maxDate, setMaxDate] = useState<number[]>([]);
    const isDrawerOpen = useSelector(selectIsCreateWindowOpen);
    const isEditPageOpen = useSelector(selectIsEditWindowOpen);
    const createTime = useSelector(selectCreateTime);

    useEffect(() => {
      setInitialMaster((prev) => {
        return {
          ...prev,
          id: appointmentDetails.master.id,
          name: appointmentDetails.master.name,
        };
      });
      setInitialService((prev) => {
        return {
          ...prev,
          id: appointmentDetails.services[0].id,
          name: appointmentDetails.services[0].name,
        };
      });
      setClient(appointmentDetails.client);

      formik.setFieldValue("price", appointmentDetails.price || "");
      formik.setFieldValue(
        "specialRequests",
        appointmentDetails.specialRequests,
      );
    }, [appointmentDetails]);

    useEffect(() => {
      if (master && master !== selectedMaster) {
        setInitialMaster((prev) => {
          return {
            ...prev,
            id: masterId,
            name: master,
          };
        });
      }
    }, [master]);

    useEffect(() => {
      if (!isEditPageOpen) {
        setInitialMaster((prev) => {
          return {
            ...prev,
            id: null,
            name: "All",
          };
        });
      }

      if (isEditPageOpen) {
        const fetchData = async () => {
          try {
            const busyDaysData = await getInfoForSchedulingDetails(
              appointmentDetails.id,
              businessId,
              {
                search: "DATE",
                masterUserId: selectedMasterId,
                serviceId: procedureId,
                dateTime: `${selectedDate} ${selectedTime}`,
              },
            );
            setBusyDays(busyDaysData[0].dates);
          } catch (error) {
            useNotificationToast({ type: "error" });
          }
        };
        fetchData();
      }
    }, [isEditPageOpen]);

    useEffect(() => {
      if (busyDays.length) {
        const parsedDate = parseDateString(busyDays[busyDays.length - 1]);
        setMaxDate(parsedDate);
      }
    }, [busyDays]);

    useEffect(() => {
      if (masterId) {
        setSelectedMasterId(masterId);
        formik.setFieldValue("masterAccountId", masterId);
      }
    }, [masterId]);

    useEffect(() => {
      if (createTime) {
        const date = createTime ? new Date(createTime) : new Date();

        const formattedDate = formatAppointmentDate(date);
        setSelectedDate(formattedDate);
        formik.setFieldValue("date", formattedDate);

        const time = format(date, "HH:mm");
        setSelectedTime(time);
      }
    }, [createTime]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const units = await getBusinessUnits();
          setBusinessUnits(units);
        } catch (error) {
          useNotificationToast({ type: "error" });
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
      if (businessId) {
        const business = businessUnits.find(
          (item: BusinessUnit) => item.id === businessId,
        );
        business && setBusinessName(business.name);
        formik.setFieldValue("businessUnitId", businessId);

        getBusinessUnitClients(businessId, {
          prefix: clientInfo,
        }).then((clientsData) => {
          setClients(clientsData);
        });
      }
    }, [businessId, clientInfo]);

    useEffect(() => {
      if (businessId && procedureId && selectedDate) {
        const fetchData = async () => {
          try {
            const timeList = await getTimeForAppointment(businessId, {
              masterId: selectedMasterId,
              procedureId,
              date: selectedDate,
            });
            setTimeList(timeList);

            const proceduresData = await getBusinessUnitProcedures(businessId, {
              masterId: selectedMasterId,
              datetime: `${selectedDate} ${selectedTime}`,
            });

            if (proceduresData.length) {
              const procedureIds = proceduresData.map(
                (service: IProcedure) => service.id,
              );
              setProcedureIds(procedureIds?.join(", "));

              const procedure = proceduresData.find(
                (service: IProcedure) => service.id === procedureId,
              );
              formik.setFieldValue("duration", procedure.duration.title);
            }
          } catch (error) {
            useNotificationToast({ type: "error" });
          }
        };
        fetchData();
      }
    }, [businessId, procedureId, selectedDate, selectedTime, selectedMasterId]);

    useEffect(() => {
      if (businessId && procedureId) {
        const fetchData = async () => {
          try {
            const busyDaysData = isEditPageOpen
              ? await getInfoForSchedulingDetails(
                  appointmentDetails.id,
                  businessId,
                  {
                    search: "DATE",
                    masterUserId: selectedMasterId,
                    serviceId: procedureId,
                    dateTime: `${selectedDate} ${selectedTime}`,
                  },
                )
              : await getBusyDays(businessId, {
                  procedureId,
                  masterId: selectedMasterId,
                });

            let busyDaysToSave: string[] = [];
            if (
              isEditPageOpen &&
              Array.isArray(busyDaysData) &&
              typeof busyDaysData[0] === "object" &&
              "dates" in busyDaysData[0]
            ) {
              busyDaysToSave = busyDaysData[0].dates;
            } else if (
              Array.isArray(busyDaysData) &&
              typeof busyDaysData[0] === "string"
            ) {
              busyDaysToSave = busyDaysData as string[];
            }
            setBusyDays(busyDaysToSave);
          } catch (error) {
            useNotificationToast({ type: "error" });
          }
        };
        fetchData();
      }
    }, [businessId, procedureId, selectedMasterId]);

    useEffect(() => {
      const selectedClient = clients.find(
        (clientData: IClientValues) =>
          clientData.name === clientInfo || clientData.phone === clientInfo,
      );

      if (clientInfo && selectedClient) {
        const { email, phone, name } = selectedClient;

        formik.setFieldValue("email", email || "");
        formik.setFieldValue("phone", phone);
        formik.setFieldValue("name", name);

        setClient(selectedClient);
      } else {
        formik.setFieldValue("email", "");
        formik.setFieldValue("phone", "");
        formik.setFieldValue("name", "");

        setClient({
          id: Number(initialValues.clientId),
          email: initialValues.email,
          name: initialValues.name,
          countryCode: initialValues.countryCode,
          phone: initialValues.phone,
        });
      }
    }, [clientInfo]);

    const resetForm = () => {
      formik.setValues(initialValues);
      formik.setTouched({});
      formik.setErrors({});
      formik.setFieldValue("masterAccountId", selectedMasterId);
      formik.setFieldValue("master", selectedMaster);
      formik.setFieldValue("time", selectedTime);
      setSelectedMaster(master);
      setInitialService((prev) => {
        return {
          ...prev,
          id: null,
          name: "",
        };
      });
      setClient({
        id: Number(initialValues.clientId),
        email: initialValues.email,
        name: initialValues.name,
        countryCode: initialValues.countryCode,
        phone: initialValues.phone,
      });
    };

    const formik = useFormik<IFormValues>({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const appointmentData = {
          startDatetime: `${values.date} ${values.time}`,
          currency: "PLN",
          price: values.price ? Number(values.price) : null,
          specialRequests: values.specialRequests,
          businessUnitId: businessId,
          masterAccountId: Number(values.masterAccountId),
          client: {
            email: values.email || null,
            name: values.name,
            countryCode: "+48",
            phone: values.phone,
          },
          procedureIds: [Number(values.procedureId)],
        };

        try {
          await createAppointment(appointmentData);
          formik.resetForm();
          resetForm();
          useNotificationToast({
            type: "success",
            message: "The appointment was added successfully",
          });
          updateAppointments();
        } catch (error) {
          useNotificationToast({ type: "error" });
        }
      },
    });

    const handleSelectMasterId = (id: number | null) => {
      setSelectedMasterId(id);
      formik.setFieldValue("masterAccountId", id);
    };

    const handleSelectProcedureId = (id: number | null) => {
      setProcedureId(id);
      formik.setFieldValue("procedureId", id);
    };

    const handleSelectDate = (date: Date) => {
      if (date) {
        const formattedDate = formatAppointmentDate(date);
        setSelectedDate(formattedDate);
        formik.setFieldValue("date", formattedDate);
      }
    };

    const handleSelectName = (value: string) => {
      formik.setFieldValue("name", value);
    };

    const handleSelectPhone = (value: string) => {
      formik.setFieldValue("phone", value);
    };

    const handleClose = () => {
      setIsLeaveModalOpen(true);
      if (isLeaveModalOpen) {
        dispatch(toggleCreateWindowOpenAction(false));
        isEditPageOpen && dispatch(isEditWindowOpenAction(false));
      }
    };

    const handleSubmit = () => {
      dispatch(toggleCreateWindowOpenAction(false));
      isEditPageOpen && dispatch(isEditWindowOpenAction(false));
    };

    const modalActionHandler = () => {
      setIsLeaveModalOpen(false);
      dispatch(toggleCreateWindowOpenAction(false));
      isEditPageOpen && dispatch(isEditWindowOpenAction(false));
      resetForm();
      if (appointmentDetails.startDatetime) {
        const date = new Date(appointmentDetails.startDatetime);
        const formattedDate = formatAppointmentDate(date);
        const time = format(date, "HH:mm");
        isEditPageOpen && setSelectedDate(formattedDate);
        isEditPageOpen && setSelectedTime(time);
      }
    };

    const saveModalActionHandler = () => {
      setIsSaveModalOpen(false);
      dispatch(toggleCreateWindowOpenAction(false));
      isEditPageOpen && dispatch(isEditWindowOpenAction(false));

      const dataToSave = {
        masterUserId: Number(formik.values.masterAccountId),
        serviceId: Number(formik.values.procedureId),
        dateTime: `${formik.values.date} ${formik.values.time}`,
        currency: "PLN",
        price: formik.values.price ? Number(formik.values.price) : null,
        specialRequests: formik.values.specialRequests,
        status: formik.values.status || appointmentDetails.status.value,
        client: {
          email: formik.values.email,
          name: formik.values.name,
          countryCode: "+48",
          phone: formik.values.phone,
          id: client ? client.id : appointmentDetails.client.id,
        },
      };

      const fetchData = async () => {
        try {
          await updateAppointment(appointmentDetails.id, dataToSave);
          useNotificationToast({
            type: "success",
            message: "All entered changes were successfully saved",
          });
          updateAppointments();
        } catch (error) {
          useNotificationToast({ type: "error" });
        }
      };
      fetchData();
    };

    const isDateTimeChanged = appointmentDetails.startDatetime
      ? formik.values.date !==
          formatAppointmentDate(new Date(appointmentDetails.startDatetime)) ||
        formik.values.time !==
          format(new Date(appointmentDetails.startDatetime), "HH:mm")
      : false;

    const isChangedData =
      isEditPageOpen &&
      (formik.values.master !== appointmentDetails.master.name ||
        formik.values.procedure !== appointmentDetails.services[0].name ||
        formik.values.name !== appointmentDetails.client.name ||
        formik.values.email !== (appointmentDetails.client.email ?? "") ||
        formik.values.phone !== appointmentDetails.client.phone ||
        formik.values.price !== (appointmentDetails.price ?? "") ||
        formik.values.specialRequests !== appointmentDetails.specialRequests ||
        (formik.values.status &&
          formik.values.status !== appointmentDetails.status.value) ||
        isDateTimeChanged);

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      formik.setFieldValue("status", event.target.value);
    };

    return (
      <SwipeableDrawer
        anchor={isTabletScreen ? "right" : "bottom"}
        open={isDrawerOpen}
        onClose={handleClose}
        onOpen={() => dispatch(toggleCreateWindowOpenAction(false))}
        sx={styles.drawer(isLargeScreen, isXlScreen)}
      >
        <CloseBtn handleClose={handleClose} sx={styles.closeBtn} />
        <Typography variant="h1" sx={styles.title}>
          {isEditPageOpen ? "Edit appointment" : "Schedule appointment"}
        </Typography>
        <Box sx={styles.drawerContent}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container>
              <Grid item sm={12} lg={6}>
                <Paper
                  sx={{
                    ...styles.formsWrapper,
                    ...styles.schedulingWrapper,
                  }}
                >
                  <Box sx={styles.headerContent}>
                    <Title text="Scheduling details" />
                    <Typography sx={styles.helpText}>
                      Appointment in
                      <Typography sx={styles.helpTextBold} component="span">
                        {` ${businessName}`}
                      </Typography>
                    </Typography>
                  </Box>
                  {businessId && (
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6} lg={12}>
                        <SmartSearch
                          name="master"
                          label="Master*"
                          placeholder="Master"
                          sx={styles.smartSearch}
                          getOptionsFunc={
                            isEditPageOpen
                              ? () =>
                                  getInfoForSchedulingDetails(
                                    appointmentDetails.id,
                                    businessId,
                                    {
                                      search: "MASTER",
                                      masterUserId:
                                        appointmentDetails.master.id,
                                      serviceId:
                                        appointmentDetails.services[0].id,
                                      dateTime: `${selectedDate} ${selectedTime}`,
                                    },
                                  )
                              : () =>
                                  getMastersForAppointment(businessId, {
                                    procedureIds: procedureIds,
                                    datetime: `${selectedDate} ${selectedTime}`,
                                  })
                          }
                          handleSelect={(value) => {
                            setSelectedMaster(value || null);
                            setSelectedMasterInAppointments(value);
                            formik.setFieldValue("master", value);
                          }}
                          handleSelectId={handleSelectMasterId}
                          zIndexOptions={1700}
                          initialValue={initialMaster}
                          isError={
                            formik.touched.master &&
                            Boolean(formik.errors.master)
                          }
                          helperText={
                            (formik.touched.master && formik.errors.master) ||
                            undefined
                          }
                          handleBlur={formik.handleBlur}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} lg={12}>
                        <SmartSearch
                          name="procedure"
                          label="Service*"
                          placeholder="Service"
                          sx={styles.smartSearch}
                          getOptionsFunc={
                            isEditPageOpen
                              ? () =>
                                  getInfoForSchedulingDetails(
                                    appointmentDetails.id,
                                    businessId,
                                    {
                                      search: "SERVICE",
                                      masterUserId:
                                        appointmentDetails.master.id,
                                      serviceId:
                                        appointmentDetails.services[0].id,
                                      dateTime: `${selectedDate} ${selectedTime}`,
                                    },
                                  )
                              : () =>
                                  getBusinessUnitProcedures(businessId, {
                                    masterId: selectedMasterId,
                                    datetime: `${selectedDate} ${selectedTime}`,
                                  })
                          }
                          handleSelect={(value) => {
                            formik.setFieldValue("procedure", value);
                          }}
                          handleSelectId={handleSelectProcedureId}
                          zIndexOptions={1700}
                          isError={
                            formik.touched.procedure &&
                            Boolean(formik.errors.procedure)
                          }
                          helperText={
                            (formik.touched.procedure &&
                              formik.errors.procedure) ||
                            undefined
                          }
                          handleBlur={formik.handleBlur}
                          initialValue={initialService}
                        />
                      </Grid>
                    </Grid>
                  )}
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={12}>
                      <Box sx={styles.dateWrapper}>
                        <AppointmentDateInput
                          handleSelectDate={handleSelectDate}
                          date={selectedDate as string}
                          excludeDates={busyDays}
                          maxDate={
                            isEditPageOpen && maxDate.length
                              ? endOfMonth(
                                  new Date(maxDate[0], maxDate[1], maxDate[2]),
                                )
                              : undefined
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={12}>
                      <TimeSmartSearch
                        name="time"
                        label="Time*"
                        placeholder="Time"
                        sx={{
                          ...styles.smartSearch,
                          ...styles.smartSearchTime,
                        }}
                        getOptionsFunc={
                          isEditPageOpen
                            ? () =>
                                getInfoForSchedulingDetails(
                                  appointmentDetails.id,
                                  businessId,
                                  {
                                    search: "TIME",
                                    masterUserId: appointmentDetails.master.id,
                                    serviceId:
                                      appointmentDetails.services[0].id,
                                    dateTime: `${selectedDate} ${selectedTime}`,
                                  },
                                )
                            : () => {
                                return new Promise((resolve) => {
                                  resolve(timeList);
                                });
                              }
                        }
                        handleSelect={(value) => {
                          setSelectedTime(value);
                          formik.setFieldValue("time", value);
                        }}
                        zIndexOptions={1700}
                        initialValue={selectedTime}
                        isEditPage={isEditPageOpen}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={12}>
                      <Box>
                        <AuthInput
                          name="duration"
                          label="Duration"
                          placeholder="15 min"
                          formik={formik}
                          sx={{
                            ...styles.authInput,
                            ...styles.durationSmartSearch,
                          }}
                          disabled
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item sm={12} lg={6}>
                <Paper
                  sx={{
                    ...styles.formsWrapper,
                    ...styles.clientInfoWrapper,
                  }}
                >
                  <Box sx={styles.titleContainer}>
                    <Typography sx={styles.formTitle} component="h2">
                      Client Information
                    </Typography>
                  </Box>
                  {businessId && (
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6} lg={12}>
                        <ClientsSmartSearch
                          name="name"
                          label="Client Name*"
                          placeholder="Client Name"
                          zIndexOptions={1700}
                          sx={styles.smartSearch}
                          options={clients as readonly IClientValues[]}
                          maxLength={MAX_FULLNAME_LENGTH}
                          handleSelect={(value) => {
                            setClientInfo(value || "");
                          }}
                          isError={
                            formik.touched.name && Boolean(formik.errors.name)
                          }
                          helperText={
                            (formik.touched.name && formik.errors.name) ||
                            undefined
                          }
                          handleBlur={formik.handleBlur}
                          handleInputValue={handleSelectName}
                          initialValue={client}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} lg={12}>
                        <Box>
                          <AuthInput
                            name="email"
                            label="Email"
                            placeholder="example@domain.com"
                            formik={formik}
                            sx={styles.authInput}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  )}
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={12}>
                      <Box
                        sx={{
                          ...styles.phoneWrapper,
                          ...styles.phoneLabelWrapper,
                        }}
                      >
                        <InputLabel
                          sx={styles.phoneLabel}
                          style={{
                            color:
                              formik.touched.phone &&
                              Boolean(formik.errors.phone)
                                ? colors.error.main
                                : "inherit",
                          }}
                        >
                          Phone number*
                        </InputLabel>
                      </Box>
                      <Box sx={styles.phoneWrapper}>
                        <CountryCodeSelect
                          formik={formik}
                          sx={styles.countrySelect}
                          disabled
                        />
                        <ClientsSmartSearch
                          name="phone"
                          placeholder="___ ___ ___"
                          zIndexOptions={1700}
                          sx={styles.phoneInput}
                          options={clients as readonly IClientValues[]}
                          handleSelect={(value) => {
                            setClientInfo(value || "");
                          }}
                          maxLength={MAX_PHONE_LENGTH}
                          onKeyPress={
                            onKeyPressHandler as (
                              e: React.KeyboardEvent<HTMLDivElement>,
                            ) => void
                          }
                          isError={
                            formik.touched.phone && Boolean(formik.errors.phone)
                          }
                          helperText={
                            (formik.touched.phone && formik.errors.phone) ||
                            undefined
                          }
                          handleBlur={formik.handleBlur}
                          handleInputValue={handleSelectPhone}
                          initialValue={client}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={12}>
                      <MainRadioGroup
                        id="notification"
                        name="notification"
                        label="Send notification"
                        defaultValue="none"
                        options={notificationMenu}
                        sx={styles.radioGroup}
                        columnCount={{
                          xs: 12,
                          md: 6,
                          lg: 12,
                        }}
                        tooltip={false}
                        disabled={!isEditPageOpen}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Paper sx={styles.formsWrapper}>
              <Box sx={styles.titleContainer}>
                <Typography sx={styles.formTitle} component="h2">
                  Price
                </Typography>
                <Grid container>
                  <Grid item>
                    <AuthInput
                      formik={formik}
                      label="Price (PLN)"
                      sx={{
                        ...styles.authInput,
                        ...styles.priceInput,
                      }}
                      name="price"
                      id="price"
                      placeholder="Enter price"
                      maxLength={MAX_PRICE_LENGTH}
                      onKeyPress={onKeyPressHandler}
                    />
                  </Grid>
                  <Grid item sx={styles.currencyInput}>
                    <SelectInput
                      formik={formik}
                      name="currency"
                      id="currency"
                      label="Currency"
                      placeholder={DEFAULT_CURRENCY}
                      disabled={true}
                    />
                  </Grid>
                </Grid>
                <Box sx={styles.textAreaInput}>
                  <TextAreaInput
                    maxCharacters={MAX_DESC_LENGTH}
                    name="specialRequests"
                    id="specialRequests"
                    placeholder="Enter a description..."
                    label="Special requests"
                    formik={formik}
                  />
                </Box>
              </Box>
            </Paper>
            {isEditPageOpen && (
              <Paper sx={styles.formsWrapper}>
                <Typography
                  sx={{
                    ...styles.formTitle,
                    ...addClientStyles.formTitle,
                  }}
                  component="h2"
                >
                  Status
                </Typography>
                <MainRadioGroup
                  id="status"
                  name="status"
                  options={appointmentStatuses}
                  defaultValue={appointmentDetails.status.value}
                  onChange={handleStatusChange}
                  sx={addClientStyles.radioGroup(
                    isTabletScreen,
                    isLargeScreen,
                    isXlScreen,
                  )}
                  tooltip={false}
                  disabled={false}
                />
              </Paper>
            )}
            <Box sx={styles.buttonsWrapper}>
              <Button
                className="secondary"
                sx={{
                  ...styles.generalBtn,
                  ...styles.cancelBtn,
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                type={isEditPageOpen ? "button" : "submit"}
                className="primaryBlack"
                sx={styles.generalBtn}
                disabled={isEditPageOpen ? !isChangedData : !formik.isValid}
                onClick={
                  isEditPageOpen
                    ? () => {
                        setIsSaveModalOpen(true);
                      }
                    : handleSubmit
                }
              >
                {isEditPageOpen ? "Save" : "Schedule"}
              </Button>
            </Box>
          </form>
        </Box>
        <MainModal
          openModal={isLeaveModalOpen}
          modalClose={() => {
            setIsLeaveModalOpen(false);
          }}
          handleAction={modalActionHandler}
          titleMessage="Are you sure?"
          bodyMessage="Do you want to leave without saving?"
          buttonMessage="Leave"
          secondBtnMessage="Cancel"
          zIndex={1700}
        />
        <MainModal
          openModal={isSaveModalOpen}
          modalClose={() => {
            setIsSaveModalOpen(false);
          }}
          handleAction={saveModalActionHandler}
          titleMessage="Are you sure?"
          bodyMessage="Do you want to save changes?"
          buttonMessage="Approve"
          secondBtnMessage="Decline"
          zIndex={1700}
        />
      </SwipeableDrawer>
    );
  },
);
