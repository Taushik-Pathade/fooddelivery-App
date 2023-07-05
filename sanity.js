import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url"


const client = sanityClient({
    projectId: '6gaktx61',
    dataset: 'production',
useCdn:true,
apiVersion:'v2021-10-21',
}) 


const builder = imageBuilder(client)
export const urlFor = Source => builder.image(Source)
export default client