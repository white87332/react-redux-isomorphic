export default function promiseMiddleware(objMethods)
{
    // next = dispatch
    return (next) => (action) =>
    {
        const { promise, types, ...rest } = action;

        // if no promise attr, next
        if (!promise) {
            return next(action);
        }

        // 這裏聰明的將外界傳入的變數，透過 destructuring 轉為常數
        // 因此 middleware 可適用於各種不同情境
        const [REQUEST, SUCCESS, ERROR] = types;

        // 進行第一次的廣播，讓畫面立即更新，也就是 optimistic update
        next({ ...rest, type: REQUEST });

        // 然後偵聽 WebAPI promise 操作結束，發出第二次廣播
        // 這次 type 改為 SUCCESS or ERROR
        return promise
            .then((data) => {
                next({ ...rest, data: data.data, type: SUCCESS });
            })
            .catch((error) => {
                next({ ...rest, error, type: ERROR });
            });
    };
}
