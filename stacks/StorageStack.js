import { Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
  const table = new Table(stack, "AutoTrader", {
    fields: {
      PK: "string",
      SK: "string",
    },
    primaryIndex: { partitionKey: "PK", sortKey: "SK" },
  });

  return {
    table,
  };
}