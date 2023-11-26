export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(name, email, message);

    // Process the form data and perform actions
    return { success: true };
  },
};
