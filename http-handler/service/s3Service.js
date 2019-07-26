const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1'
})

const uuid = require('uuid/v4')

const s3 = new AWS.S3()

const BUCKET = 'nanoservices-imgs-lambda'

const JPEG = '.jpg'

const upload = body => {
    
    const id = uuid();

    return new Promise((res, rej) => {
        s3.putObject({
            Bucket: BUCKET,
            Key: id + JPEG,
            Body: new Buffer(body.replace(/^data:image\/\w+;base64,/, ""),'base64'),
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg'
        }, (err) => {
            if (err) {
                return rej(err)
            }
            return res({
                bucket: BUCKET,
                key: id + JPEG
            })
        })
    })
}

module.exports = {
    upload: upload
}