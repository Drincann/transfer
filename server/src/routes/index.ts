import KoaRouter from 'koa-router'
import * as api from './api'

export const router = Object.entries(api).reduce((router, [name, handler]) => router.all(`/${name}`, handler), new KoaRouter)