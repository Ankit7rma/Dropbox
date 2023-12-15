import { FileType } from "@/typings";
import React from "react";
import { Button } from "../ui/button";

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  return (
    <div>
      <Button>Sort By...</Button>
      {/* <DataTable columns={columns} data={initialFiles} /> */}
    </div>
  );
}

export default TableWrapper;
