import axios from 'axios'
import { resolve } from 'url';
import { rejects } from 'assert';


/**获取最新消息 */
export function getLatestNews(){
    return new Promise((resolve,reject)=>{
        axios.get("/api/4/news/latest").then(res=>{
            resolve(res.data)
        })
    })
}

/**获取消息内容 */
export function getNewsById (id) {
    return new Promise((resolve,reject)=>{
        axios.get("https://news-at.zhihu.com/api/4/news/"+id).then(res=>{
            resolve(res.data)
        })
    })
}