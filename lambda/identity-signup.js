module.exports.handler = (event, context, callback) => {
  const payload = JSON.parse(event.body);

  console.log(payload);

  const user = payload.user;

  // // this fires for only email+password signups, not for signups via external providers e.g. Google/GitHub

  // console.log('User signed up', user);

  // user.app_metadata.roles = ['administrator'];

  console.log('user', user);

  console.log(user.user_metadata.app_metadata);

  callback(null, {
    statusCode: 200,
    body: user,
  });
};
