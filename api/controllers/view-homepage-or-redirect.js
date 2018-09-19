const si = require('systeminformation');

module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },

  },


  fn: async function (inputs, exits) {

    if (this.req.me) {
      throw {redirect:'/welcome'};
    }
    var current = await si.currentLoad();
    var cpuUsage = current.currentload || current.load;
    console.log(JSON.stringify(cpuUsage));
    return exits.success({cpuUsage});
  }


};
