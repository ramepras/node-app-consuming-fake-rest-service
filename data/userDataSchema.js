export const userSchema = {
  type: "object",
  properties: {
    users: {
      type: "array",
      minItems: 10,
      maxItems: 100,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            minimum: 1,
          },
          firstName: {
            type: "string",
            faker: "name.firstName",
          },
          lastName: {
            type: "string",
            faker: "name.lastName",
          },
          email: {
            type: "string",
            faker: "internet.email",
          },
          city: {
            type: "string",
            faker: "address.city",
          },
          state: {
            type: "string",
            faker: "address.state",
          },
          country: {
            type: "string",
            faker: "address.country",
          },
        },
        required: ["id", "firstName", "lastName", "email", "city", "state", "country"],
      },
    },
  },
  required: ["users"],
};
