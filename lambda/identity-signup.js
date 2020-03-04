module.exports.handler = (event, context, callback) => {
  // hook called after user submit
  // https://www.netlify.com/blog/2019/02/21/the-role-of-roles-and-how-to-set-them-in-netlify-identity/
  const data = JSON.parse(event.body);
  const { user } = data;

  const responseBody = {
    app_metadata: {
      roles: [user.user_metadata.role],
    },
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  });
};
