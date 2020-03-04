module.exports.handler = (event, context, callback) => {
  const payload = JSON.parse(event.body);

  const user = payload.user;

  // // this fires for only email+password signups, not for signups via external providers e.g. Google/GitHub

  console.log('User signed up', user);

  callback(null, {
    statusCode: 200,
    body: user,
  });
};
