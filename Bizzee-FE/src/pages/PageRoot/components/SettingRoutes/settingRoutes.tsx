import React, { Suspense, lazy } from "react";
import { routes } from "config/routes";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { SettingsOverview } from "pages/Settings/components/SettingsOverview";
import { MasterForm } from "pages/Settings/components/StaffMembers/components/MasterForm/MasterForm";
import {
  staffEditTabsConfig,
  staffTabsConfig,
  unitsEditTabsConfig,
  unitsTabsConfig,
} from "config/constants";
import { Services } from "pages/Settings/components/Services";
import { StaffPortfolio } from "pages/Settings/components/StaffPortfolio";
import { GeneralUnitInfo } from "pages/Settings/components/BusinessUnits/components/GeneralUnitInfo";
import { BusinessStaff } from "pages/Settings/components/BusinessUnits/components/BusinessStaff";
import { StaffPortfolioEdit } from "pages/Settings/components/StaffPortfolioEdit";
import { Appointments } from "pages/Settings/components/Appointments";
import { PrivateRoute } from "../PrivateRoute";
import { BusinessProfile } from "pages/Settings/components/BusinessProfile";
import { StaffMembers } from "pages/Settings/components/StaffMembers";
import { BusinessUnits } from "pages/Settings/components/BusinessUnits";
import { MasterServices } from "pages/Settings/components/StaffMembers/components/MasterServices/MasterServices";
import { Clients } from "pages/Settings/components/Clients";
import { WorkingHours } from "pages/Settings/components/StaffMembers/components/WorkingHours";
import { AddClient } from "pages/Settings/components/Clients/components/AddClient";
import { UnitsWorkingHours } from "pages/Settings/components/BusinessUnits/components/UnitsWorkingHours";

const Settings = lazy(() => import("pages/Settings"));

export const SettingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Settings />}>
        <Route index element={<Navigate to={routes.settings.appointments} />} />
        <Route
          path={routes.settings.appointments}
          element={
            <PrivateRoute>
              <Appointments />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.settings.clients.root}
          element={
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.settings.clients.add}
            element={
              <PrivateRoute>
                <AddClient />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path={routes.settings.services}
          element={
            <PrivateRoute>
              <Services />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.settings.businessProfile}
          element={
            <PrivateRoute>
              <BusinessProfile />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.settings.staff.root}
          element={
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <StaffMembers />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.settings.staff.add.root}
            element={
              <PrivateRoute>
                <SettingsOverview tabsConfig={staffTabsConfig} />
              </PrivateRoute>
            }
          >
            <Route
              path={routes.settings.staff.add.general}
              element={
                <PrivateRoute>
                  <MasterForm />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.add.schedule}
              element={
                <PrivateRoute>
                  <>schedule</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.add.services}
              element={
                <PrivateRoute>
                  <>services</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.add.portfolio}
              element={
                <PrivateRoute>
                  <StaffPortfolio />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.add.certificates}
              element={
                <PrivateRoute>
                  <>certificates</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.add.reviews}
              element={
                <PrivateRoute>
                  <>reviews</>
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={`${routes.settings.staff.edit.root}/${routes.settings.staff.edit.masterId.root}`}
            element={
              <PrivateRoute>
                <SettingsOverview tabsConfig={staffEditTabsConfig} />
              </PrivateRoute>
            }
          >
            <Route
              path={routes.settings.staff.add.root}
              element={
                <PrivateRoute>
                  <SettingsOverview tabsConfig={unitsTabsConfig} />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path={routes.settings.staff.edit.masterId.general}
              element={
                <PrivateRoute>
                  <MasterForm />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.edit.masterId.schedule}
              element={
                <PrivateRoute>
                  <WorkingHours />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.edit.masterId.services}
              element={
                <PrivateRoute>
                  <MasterServices />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.edit.masterId.portfolio}
              element={
                <PrivateRoute>
                  <StaffPortfolioEdit />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.edit.masterId.certificates}
              element={
                <PrivateRoute>
                  <>certificates</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.staff.edit.masterId.reviews}
              element={
                <PrivateRoute>
                  <>reviews</>
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route
          path={routes.settings.units.root}
          element={
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <BusinessUnits />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.settings.units.add.root}
            element={
              <PrivateRoute>
                <SettingsOverview tabsConfig={unitsTabsConfig} />
              </PrivateRoute>
            }
          >
            <Route
              path={routes.settings.units.add.general}
              element={
                <PrivateRoute>
                  <GeneralUnitInfo />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.add.schedule}
              element={
                <PrivateRoute>
                  <>schedule</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.add.staff}
              element={
                <PrivateRoute>
                  <BusinessStaff />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.add.portfolio}
              element={
                <PrivateRoute>
                  <>portfolio</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.add.certificates}
              element={
                <PrivateRoute>
                  <>certificates</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.add.reviews}
              element={
                <PrivateRoute>
                  <>reviews</>
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={`${routes.settings.units.edit.root}/${routes.settings.units.edit.unitId.root}`}
            element={
              <PrivateRoute>
                <SettingsOverview tabsConfig={unitsEditTabsConfig} />
              </PrivateRoute>
            }
          >
            <Route
              path={routes.settings.units.edit.unitId.general}
              element={
                <PrivateRoute>
                  <>edit general</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.edit.unitId.schedule}
              element={
                <PrivateRoute>
                  <UnitsWorkingHours />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.edit.unitId.staff}
              element={
                <PrivateRoute>
                  <BusinessStaff />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.edit.unitId.portfolio}
              element={
                <PrivateRoute>
                  <>portfolio</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.edit.unitId.certificates}
              element={
                <PrivateRoute>
                  <>certificates</>
                </PrivateRoute>
              }
            />
            <Route
              path={routes.settings.units.edit.unitId.reviews}
              element={
                <PrivateRoute>
                  <>reviews</>
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default SettingRoutes;
