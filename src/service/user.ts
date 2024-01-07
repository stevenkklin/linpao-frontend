import myAxios from "../plugins/myAxios.ts";

export const getCurrentUser = async ()=> {
    return await myAxios.get("/user/current");
}