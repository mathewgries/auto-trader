import * as uuid from "uuid";
import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      // The attributes of the item to be created
      PK: "123", // The id of the author
      SK: uuid.v1(), // A unique uuid
			modifyDate: Date.now(), // Current Unix timestamp
      createDate: Date.now(), // Current Unix timestamp
    },
  };

	await dynamoDb.put(params);

  return params.Item;
})