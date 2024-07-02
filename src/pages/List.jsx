import React, { useState, useEffect } from "react";

import Stack from "@mui/material/Stack";

import CircularIndeterminate from "../components/Loading";
import FloatingActionButton from "../components/FAB";
import BasicTable from "../components/TableList";
import Panel from "../layouts/Panel";
import { fakeList } from "../utils/data";

export default function List() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fakeList().then((data) => {
      setItems(data);
      setIsLoading(false);
    });
  }, []);

  const columns = ["ID", "Nome", "Descrição"];
  const rows = items.map((item) => [item.id, item.name, item.description]);

  return (
    <Panel>
      <Stack direction="column" spacing={4}>
        {isLoading ? (
          <CircularIndeterminate />
        ) : (
          <>
            <FloatingActionButton />
            <BasicTable columns={columns} rows={rows} />
          </>
        )}
      </Stack>
    </Panel>
  );
}
