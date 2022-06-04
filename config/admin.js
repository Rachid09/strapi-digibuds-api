module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8ca3d05e0a37d2ffb0aa2ca250e06582'),
  },
});
