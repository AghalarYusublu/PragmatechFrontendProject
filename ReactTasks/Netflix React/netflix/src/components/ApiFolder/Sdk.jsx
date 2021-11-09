
import axios from 'axios'


class SDK {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.themoviedb.org/4',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U"
            },
            params: {
                "api_key": "285a107f0c92cfda467db221ccc502f7",
                'access_tokken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U"
            }
        })

        this.ins = axios.create({
            baseURL: 'https://api.themoviedb.org/3',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            params: {
                "api_key": "285a107f0c92cfda467db221ccc502f7"
            }
        })
        this.accountId = '5f198024a6d931003787052f'
    }

    async getListsFromAccount() {
        try {
            const request = await this.instance.get(`/account/${this.accountId}/lists`)
            return request.data
        } catch (error) {
            console.log(error)
        }
    }

    async getList(listId) {
        try {
            const req = await this.instance.get(`/list/${listId}`)
            return req.data
        } catch (error) {
            console.log(error)
        }
    }

    async getSinglePost(singlePostId, type) {
        try {
            const req = await this.ins.get(`/${type}/${singlePostId}`)
            return req.data
        } catch (error) {
            console.log(error)
        }
    }

    async getSearch(query, { abortSignal, page = 1 } = {}) {
        const req = await this.instance.get('/search/multi', {
            params: {
                query,
                page
            },
            signal: abortSignal,
        })
        return req.data;
    }

    async postCreateList(list) {
        try {
            const req = await this.instance.post('/list', list)
            return req.data
        }
        catch (error) {
            console.log(error)
        }
    }

    async postAddItems(list_id, list) {
        try {
            const req = await this.instance.post(`/list/${list_id}/items`, list)
            return req.data
        }
        catch (error) {
            console.log(error)
        }
    }
    async removeItems(list_id, info) {
        if (window.confirm("Are you sure")) {
            try {
                const res = await this.instance.delete(`/list/${list_id}/items`, {
                    data: info
                })
                return res.data;
            } catch (error) {
                console.log(error)
            }
        }
    }
    async categoryNameEdit(list_id, info) {
        try {
            const req = await this.instance.put(`/list/${list_id}`, info)
        } catch (error) {
            console.log(error)
        }

    }

}



export default SDK
