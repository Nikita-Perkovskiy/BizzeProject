import { Box, Grid, IconButton, LinearProgress } from "@mui/material";
import { styles } from "./Clients.styled";
import { CreateButton } from "components/CreateButton/CreateButton";
import { ReactComponent as IconShare } from "assets/svg/icon_share.svg";
import React, { Suspense, useState } from "react";
import { IClient } from "pages/Settings/components/Clients/components/ClientsTable/types";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import { ClientsTable } from "./components/ClientsTable/ClientsTable";
import { getExportClients } from "api/Clients/getExportClients";
import { useNotificationToast } from "hooks/useNotificationToast/useNotificationToast";
import { Title } from "components/Title/Title";
import { Subtitle } from "components/Subtitle/Subtitle";

export const Clients = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IClient[]>([]);

  const clientsRoutes = routes.settings.clients.add;
  const handleNavigate = (): void => {
    navigate(clientsRoutes);
  };

  const handleExport = async () => {
    try {
      const blob = await getExportClients(data);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "clients.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      useNotificationToast({
        type: "error",
        message: "Failed to export clients data.",
      });
    }
  };

  return (
    <Grid container sx={styles.clientsWrapper}>
      <Grid container spacing={0} sx={styles.headerWrapper}>
        <Grid item xs={10}>
          <Box sx={styles.headerContent}>
            <Title text="Clients" />
            <Subtitle text="Add your clients" />
          </Box>
        </Grid>
        <Grid item xs={2} sx={styles.headerButtonWrapper}>
          <IconButton
            sx={styles.shareButtonWrapper}
            onClick={handleExport}
            disableRipple
          >
            <IconShare />
          </IconButton>
          <CreateButton toggleFunction={handleNavigate} />
        </Grid>
        <Grid item xs={12}>
          <Suspense fallback={<LinearProgress />}>
            <ClientsTable data={data} setData={setData} />
          </Suspense>
        </Grid>
      </Grid>
    </Grid>
  );
};
