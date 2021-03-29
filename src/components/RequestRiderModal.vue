<template>
    <div>
        <!-- Modal -->
              <form>
                <div class="mb-3 text-left">
                  <label for="recipient-name" class="col-form-label">Country:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model="country">
                </div>
                <div class="mb-3 text-left">
                  <label for="recipient-name" class="col-form-label">State:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model="state">
                </div>
                <div class="mb-3 text-left">
                  <label for="recipient-name" class="col-form-label">Local Government:</label>
                  <input type="text" class="form-control" id="recipient-name" v-model="local">
                </div>
                <div class="mb-3 text-left">
                  <label for="message-text" class="col-form-label">Additional Information:</label>
                  <textarea class="form-control" id="message-text" v-model="info"></textarea>
                </div>
              </form>
              <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="requestRider">Submit</button>
              </div>
     </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'RequestRiderModal',
  data () {
    return {
      country: 'country',
      state: 'state',
      local: 'local',
      info: 'info'
    }
  },
  created () {
    console.log('request now')
  },
  methods: {
    requestRider (e) {
      // Add a new document with a generated id.
      const db = firebase.firestore()
      db.collection('requestRider').add({
        country: this.country,
        state: this.state,
        local: this.local,
        info: this.info
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
      e.preventDefault()
    }
  }
}
</script>
