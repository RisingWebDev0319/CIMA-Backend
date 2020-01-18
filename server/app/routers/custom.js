'use strict';

require('rootpath')();

var express = require('express');
var authentication = require('server/app/controllers/authentication.controller');
var buy = require('server/app/controllers/buy.controller');
var settings = require('server/app/controllers/settings.controller');
var admin = require('server/app/controllers/admin.controller');
var router = express.Router();


router.post('/user_login', authentication.user_login);
router.post('/send_sms', authentication.send_sms);
router.post('/validate_sms', authentication.validate_sms);
router.post('/userInfo', authentication.userInfo);
router.post('/validate_pass', authentication.validate_pass);
router.post('/user_signup', authentication.user_signup);
router.post('/checkout', buy.temp_checkout);
router.post('/getEquipmentCount', settings.getEquipmentCount);
router.post('/cancel_subscription', buy.cancel_subscription);
router.post('/send_feedback', settings.send_feedback);
router.post('/send_email', settings.send_email);
router.post('/admin_users', admin.admin_users);
router.post('/admin_signin', admin.admin_signin);
router.post('/export_csv', admin.export_csv);
router.post('/admin_adddaypas_in', admin.admin_adddaypas_in);
router.post('/admin_customer_update', admin.admin_customer_update);
router.post('/admin_home_getuser', admin.admin_home_getuser);
router.post('/admin_search_getuser', admin.admin_search_getuser);
router.post('/admin_manual_entry', admin.admin_manual_entry);
router.get('/validate_qr', admin.validate_qr);
router.post('/getPendingRental', admin.getPendingRental);
router.post('/force_checkout', admin.force_checkout);
router.post('/getRented', admin.getRented);
router.post('/rented_edit', admin.rented_edit);
router.post('/expiring_subscription', admin.expiring_subscription);
router.post('/rented_returned', admin.rented_returned);
router.post('/fullfill_item', admin.fullfill_item);
router.post('/remove_item', admin.remove_item);
router.post('/admin_pass_update', admin.admin_pass_update);
router.post('/upload_image', admin.upload_image);
router.post('/admin_validate_phone_number', admin.admin_validate_phone_number);
router.post('/customer_delete', admin.customer_delete);
router.post('/validate_staff', admin.validate_staff);
router.post('/admin_getCustomerInfo', admin.admin_getCustomerInfo);
router.post('/admin_gymin_inout', admin.admin_gymin_inout);
router.post('/admin_gymin_inout', admin.admin_gymin_inout);
router.post('/admin_schedule', admin.admin_schedule);
router.post('/admin_update_users', admin.admin_update_users);
router.post('/adduser', admin.adduser);
router.post('/getStatistics1', admin.getStatistics1);
router.post('/getStatistics2', admin.getStatistics2);
router.post('/gymin', settings.gymin);
router.post('/gymout', settings.gymout);
router.post('/getHistory', settings.getHistory);
router.post('/validate_turnstile', settings.validate_turnstile);
router.get('/deletedoc', settings.deletedoc);
module.exports = router;