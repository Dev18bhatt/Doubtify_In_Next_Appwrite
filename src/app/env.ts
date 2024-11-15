
// app write seh connect kr ne k liye jo bhi needed params hai
// woh apan env.ts meh store kr k rukh dete hai...

const env = {
    appwrite :{
        endpoint : String(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL),
        projectId : String(
            process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
        ),
        apikey : String(

            process.env.APPWRITE_API_KEY

        )
    }
}

export default env;