import Koa from 'koa'
import { router } from './routes'
import logger from 'koa-logger'
import config from './config'
import KoaRouter from 'koa-router'

export const server = new Koa()
    .use(config.env === 'dev' ? logger() : async (_, next) => await next())
    .use(new KoaRouter().use('/api', router.routes()).routes())