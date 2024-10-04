import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import { styles } from "./ClientsTable.styled";
import { ReactComponent as IconSwap } from "assets/svg/icon_swap.svg";
import { ReactComponent as IconDesc } from "assets/svg/icon_sort-desc.svg";
import { ReactComponent as IconAsc } from "assets/svg/icon_sort-asc.svg";
import { ReactComponent as IconBasket } from "@/../assets/svg/basket_icon.svg";
import { IClient, IHeadCell, ClientsTableProps } from "./types";
import { MIN_QUERY_LENGTH, MAX_QUERY_LENGTH } from "config/constants";
import { getBusinessOwnersClients } from "api/Clients/getBusinessOwnersClients";
import { searchClients } from "api/Clients/searchClients";
import { useNotificationToast } from "hooks/useNotificationToast/useNotificationToast";
import { CreateButton } from "components/CreateButton/CreateButton";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import { SearchEngine } from "components/SearchEngine/SearchEngine";
import { v4 as uuidv4 } from "uuid";

function displayValue(
  value: string | number | undefined | null,
  placeholder = "—",
) {
  return value || placeholder;
}

const headCells: readonly IHeadCell[] = [
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Client name",
    sortable: true,
  },
  {
    id: "phoneNumber",
    numeric: true,
    disablePadding: false,
    label: "Phone number",
  },
  {
    id: "city",
    numeric: true,
    disablePadding: false,
    label: "Location",
    sortable: true,
  },
  {
    id: "lastVisit",
    numeric: true,
    disablePadding: false,
    label: "Last visit",
    sortable: true,
  },
  {
    id: "nextVisit",
    numeric: true,
    disablePadding: false,
    label: "Next visit",
    sortable: true,
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
    sortable: true,
  },
  {
    id: "rank",
    numeric: true,
    disablePadding: false,
    label: "Rank",
    sortable: true,
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

const swapColumns = [
  "name",
  "city",
  "lastVisit",
  "nextVisit",
  "status",
  "rank",
];

export const ClientsTable = ({ data, setData }: ClientsTableProps) => {
  const [sortColumn, setSortColumn] = useState<keyof IClient | null>(null);
  const [sortedRows, setSortedRows] = useState<IClient[]>([]);
  const [sortDirection, setSortDirection] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBusinessOwnersClients(
          sortColumn as string,
          sortDirection,
        );
        return response || [];
      } catch (error) {
        return [];
      }
    };
    fetchData()
      .then((responseData: IClient[]) => {
        setData(responseData);
        setSortedRows(responseData);
      })
      .catch(() => {
        useNotificationToast({ type: "error" });
      });
  }, [sortColumn, sortDirection]);

  useEffect(() => {
    let fetchData;
    if (
      searchQuery.length >= MIN_QUERY_LENGTH &&
      searchQuery.length <= MAX_QUERY_LENGTH
    ) {
      fetchData = async () => {
        try {
          const response = await searchClients({
            searchCriteria: searchQuery,
          });
          return response || [];
        } catch (error) {
          return [];
        }
      };
    } else {
      fetchData = async () => data;
    }
    fetchData()
      .then((responseData: IClient[]) => {
        setSortedRows(responseData);
      })
      .catch(() => {
        useNotificationToast({ type: "error" });
      });
  }, [searchQuery, sortColumn, sortDirection]);

  const handleSearch = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  const handleSort = (columnId: keyof IClient) => {
    if (columnId && swapColumns.includes(columnId)) {
      setSortColumn((prevSortColumn) => {
        const isCurrentColumn = prevSortColumn === columnId;
        setSortDirection(
          (prevDirection) => !(isCurrentColumn && prevDirection),
        );
        return columnId;
      });
    }
  };

  const renderErrorMessages = () => {
    let errorMessage = null;
    if (!data.length) {
      errorMessage =
        "You don't have any clients yet, please add by clicking on the plus button";
    } else if (!sortedRows.length) {
      errorMessage = `You don't have any clients for the "${searchQuery}" request yet, please add by clicking on the plus button`;
    }
    return errorMessage;
  };

  const clientsRoutes = routes.settings.clients.add;
  const handleNavigate = (): void => {
    navigate(clientsRoutes);
  };
  const errorMessage = renderErrorMessages();

  return (
    <>
      <Grid sx={styles.searchWrapper}>
        <SearchEngine
          placeholder="Search by: client name / phone number / email / location"
          onSearch={handleSearch}
        />
      </Grid>
      {errorMessage ? (
        <Box sx={styles.clientErrorMessageWrapper}>
          <Typography sx={styles.clientErrorMessage}>{errorMessage}</Typography>
          <CreateButton toggleFunction={handleNavigate} />
        </Box>
      ) : (
        <TableContainer>
          <Divider sx={styles.tableDivider} />
          <Table sx={styles.tableWrapper}>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    sx={styles.tableCell}
                    className={sortColumn === headCell.id ? "active" : ""}
                    key={uuidv4()}
                    align="left"
                  >
                    {headCell.label}
                    {headCell.sortable && swapColumns.includes(headCell.id) && (
                      <IconButton
                        disableRipple
                        onClick={() => handleSort(headCell.id)}
                        sx={styles.tableCell}
                      >
                        {sortColumn === headCell.id &&
                        sortDirection === true ? (
                          <IconAsc />
                        ) : sortColumn === headCell.id &&
                          sortDirection === false ? (
                          <IconDesc />
                        ) : (
                          <IconSwap />
                        )}
                      </IconButton>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedRows.map((row: IClient) => (
                <TableRow
                  sx={styles.clientWrapper}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={uuidv4()}
                >
                  <TableCell component="th" scope="row">
                    <Typography sx={styles.tableLabel}>
                      {displayValue(row.name)}
                    </Typography>
                    <Typography sx={styles.clientEmail}>
                      {displayValue(row.email)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {displayValue(row.phoneNumber)}
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{displayValue(row.city)}</Typography>
                    <Typography sx={styles.clientEmail}>
                      {displayValue(row.country)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {displayValue(row.lastVisit)}
                  </TableCell>
                  <TableCell align="center">
                    {displayValue(row.nextVisit)}
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={styles.clientStatus}>
                      {displayValue(row.status?.toUpperCase())}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={styles.clientRank}>
                      {displayValue(row.rank.toUpperCase())}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton disableRipple>
                      <IconBasket />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
