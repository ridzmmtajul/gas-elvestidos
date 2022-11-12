<template>
    <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
    ></StreamBarcodeReader>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import router from "./../../router/index"; 

export default {
    components: {
        StreamBarcodeReader,
    },
    methods: {
        onDecode(qrcode) {
            this.runGoogleScript("checkOrderCode", qrcode).then(data => {
                if(data){
                    router.push({ path: 'order-details', query: { order: data } })
                }else{
                    swal("Error", "Ooops, QR code was unrecognized", "error");
                }
            }).catch(error => {
                swal("Error", "Sorry, something went wrong", "error");

                console.log(error);
            });
        },
        onLoaded() {
            console.log(`Ready to start scanning barcodes`)
        },
        runGoogleScript(serverFunctionName, order){
            return new Promise((resolve, reject) => {
                google.script.run
                .withSuccessHandler(data => {
                    resolve(data);
                })
                .withFailureHandler(error => {
                    reject(error);
                })[serverFunctionName](order);
            });
        },
    }
}
</script>