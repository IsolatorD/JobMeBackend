'use strict';

/**
 * user-certification service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-certification.user-certification');
