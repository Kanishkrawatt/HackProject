import admin from "firebase-admin";

const serviceAccount = {
  "type": "service_account",
  "project_id": "hackproject-5940d",
  "private_key_id": "0e2418d0f23ff3f8a62cdc3d8e76812529da574b",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCo+GAs3wgzmC1G\n5EGGGN4EPZ/991+a7MWa45DNohnkPe8hcxxuIpgCMLMf3SzALkTE+tRJpggb2CZi\n77yIhQ0z9r7hd/FuoTKW46RlTS4xu4BEmB/94gjQkwEGPK/HS3jSM90od8c0oH2K\nnasLHmtPEGFek2WR/hcdQQXIYdmWqs+7QNvGMNvGPCUn63m7BGBHk0EzISW7WHgf\nhraOFWQieWFex8Yz2mGu72qIIUBRFbRRcoUvq3lEUqK7fU8lo1OuXn9fl9w1iIPg\nLSfVpRJ/0zcCWI/2mWs8kADt1W2xdnixsWV9W3qyFzgxLTlrR74oUvBYWaOLl2bz\nXw/IjHXnAgMBAAECggEAOI0YMyxaJFp0HNvcCjNcavLtDySxvLot0I8FMa1lGPyZ\nggpyo3G0ilcePDXb+l4B6iNA1X1aDWekQUyXPuG474FPlUp9ZVdSBSofJUBVi5OD\ndHGtk10JMjVhDGNXOU5LG578D8U2yKhGHBR04H3H0GhdDjgqsFfoCIRwmQYWutPZ\nBUR7k+YGMv0UonvQnqGd7aAVtUGjLIshGmPZbSKgBz1lcgf22LVu4m6WSPq0ZHvC\n7teyBpZ2J5PpBsWP+Z/m5DB0BDOUnYv5Y6WcbZHmtE4Wh+LBjIGpsr172CHzR1kX\nuzaga4c7NyrixW2aVVPNtNz2LnrP2Be9lCTxpN16YQKBgQDR/No9E19eKGo9Y1TX\nuv20KkYHkkO7ZbpwjJj19oNfaoasfQH9r/AGAyd14DlelVyBYTQiRfJOWsmOLF7z\nwMKPJgtpFgz295dP+shcqVPLXoTJSx0x05FzKJuqVXsGapeNNXqRrtBCdO6Fyw8r\nfPmfqvQtd7/JTRB6m46nJFdtvwKBgQDN/qtUxH5Rvl4/Ey2fzPkCoa2jcuMnFPRO\n/CuK8F2ZsY8SWl4/dk2ptRnbZ3HkN5QLS5+NWMhO8/gLcopJAmtw5PTNoxEVXI+e\ne8eIWjScGGdNXO1W6MDjUk//meVqmYXsuAOeHd3YJ8yWSmHATiwYvVhIeXYKe7Ce\nAY53ywlR2QKBgFiqAxw2ydXgCrvQ7UoJ0oX4M4mO4LqHwak0NIHmjKIFQMgkIGsV\nlqtzOX40JwUg2+ZlPLYcAqvC+cfmRFF32q7GyZqdjOvarzE+GsvFU3RTfI3iAXnA\nc3HEe7X4UfHroAInypEo1xa4eN5VVxptspkQffmUzo4Y1BRxClLYrXHRAoGAMcTn\n7DEVO/a8moytp0BEoWgipazqSNT9OeAfPRBZ7PpDUPHYd4jDts70klfp4nOzJw98\nWxAqRTkYottnocAd6UbIBq7xP7H/WREa4ky5DUWwH7bl+Ot/PuzyOxUZoqm4+7px\n1U/t+32SJnWOLII2kTueCtSdumasA2Do5PR/KfECgYEAv+qDuMSHlsPu2M6abMH9\nVmA4zmViljQXQzffdGuAl2GK55Y5ZPSKf3qqRztdRJSyKaTV7ImbViwdtJdKUy/t\nEfSNJ9f2qjtf9tq27jOh0OLTOQqlYzuWgU+8DgwALmokQQewUGWt+Qw/PqNGMx5B\nCdwUMP4b8RF2XiLw0HT38vk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-c7411@hackproject-5940d.iam.gserviceaccount.com",
  "client_id": "100788488394193610578",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-c7411%40hackproject-5940d.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
;
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
export default admin.firestore();