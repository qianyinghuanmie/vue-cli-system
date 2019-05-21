/**
 * 基于 https://github.com/bripkens/connect-history-api-fallback 改造
 */
const path = require('path')
const fs = require('fs')
const logger = require('./logger/koa-logger')('spaMiddleWare')
const currentIP = require('ip').address()

const {IS_DEBUG} = require('../utils/env')
const appConfig = require('./../../app.config')

const defaultOptions = {include: /^\/(api|static|public|v3)/}
