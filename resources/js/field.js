import Clipboard from 'v-clipboard'
import "vue3-swatches/dist/style.css";
import Swatches from "vue3-swatches";
import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
    app.use(Clipboard)

    app.component('index-nova-swatches', IndexField)
    app.component('detail-nova-swatches', DetailField)
    app.component('form-nova-swatches', FormField)
    app.component('swatches', Swatches)
})
