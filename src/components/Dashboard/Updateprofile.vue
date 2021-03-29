<template>
  <div class="container-fluid bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-2 mt-3 border-right mb-3">
        <div class="row justify-content-center">
          <img
            :src="imageUrl"
            alt="Passport"
            class="col-lg-8 col-6 rounded-circle mb-3"
          />
        </div>
        <div class="w-100 text-center">
          <button class="btn btn-outline-primary w-auto" @click="onPickFile">Upload Image</button>
        </div>
        <div class="progress mt-3">
          <div class="progress-bar" role="progressbar" aria-valuenow="70"
          aria-valuemin="0" aria-valuemax="100" style="width:100%">
            {{ progress }}
          </div>
        </div>
        <input type="file" ref="fileInput" accept="image/*" @change="onFilePicked" style="display: none" />
        <!-- <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-" src="https://encrypted-tbn0.gstatic.com/image?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU"><span class="font-weight-bold">{{user.firstname}}</span><span class="text-black-50">{{user.email}}</span><span> </span></div> -->
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels text-left">Name</label
              ><input
                type="text"
                v-model="user.firstname"
                class="form-control"
                placeholder="first name"
                value=""
              />
            </div>
            <div class="col-md-6">
              <label class="labels text-left">Surname</label
              ><input
                type="text"
                v-model="user.lastname"
                class="form-control"
                value=""
                placeholder="last name"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">PhoneNumber</label
              ><input
                type="text"
                v-model="user.phone"
                class="form-control"
                placeholder="enter phone number"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address</label
              ><input
                type="text"
                v-model="user.address"
                class="form-control"
                placeholder="enter address"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Email ID</label
              ><input
                type="text"
                v-model="user.email"
                class="form-control"
                disabled
                placeholder="enter email id"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Business</label
              ><input
                type="text"
                v-model="user.business"
                class="form-control"
                placeholder="name of business"
                value=""
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="labels">Country</label
              ><input
                type="text"
                v-model="user.country"
                class="form-control"
                placeholder="country"
                value=""
              />
            </div>
            <div class="col-md-6">
              <label class="labels">State/Region</label
              ><input
                type="text"
                v-model="user.state"
                class="form-control"
                value=""
                placeholder="state"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button
              class="btn btn-primary profile-button"
              @click="submitted"
              type="button"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 py-5">
          <div
            class="d-flex justify-content-between align-items-center experience"
          >
            <span>Edit Experience</span
            ><span class="border px-3 p-1 add-experience"
              ><i class="fa fa-plus"></i>&nbsp;Experience</span
            >
          </div>
          <br />
          <div class="col-md-12">
            <label class="labels">Experience in Business</label
            ><input
              type="text"
              v-model="user.experience"
              class="form-control"
              placeholder="experience"
              value=""
            />
          </div>
          <br />
          <div class="col-md-12">
            <label class="labels">Additional Details</label
            ><input
              type="text"
              v-model="user.detail"
              class="form-control"
              placeholder="additional details"
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import 'firebase/storage'
export default {
  name: 'Updateprofile',
  components: {},
  data () {
    return {
      user: '',
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      business: '',
      country: '',
      state: '',
      experience: '',
      detail: '',
      currentUser: firebase.auth().currentUser,
      userId: '',
      image: null,
      imageUrl: '',
      progress: ''
    }
  },
  computed: {
    initials () {
      if (!this.user.firstname && !this.user.lastname) return ''
      return `${this.user.firstname}`
    },
    loggedUser () {
      const currentUser = this.currentUser
      console.log(currentUser, 'in computed')
      return currentUser
    }
  },
  methods: {
    getUser () {
      const currentUser = firebase.auth().currentUser
      return currentUser
    },
    submitted () {
      const currentUser = firebase.auth().currentUser
      const db = firebase.firestore()
      console.log(currentUser, 'current-user')
      if (currentUser) {
        db.collection('users')
          .get()
          .then((querySnapshot) => {
            // console.log(querySnapshot, 'query')
            querySnapshot.forEach((doc) => {
              console.log(doc, 'in fb')
              if (currentUser.email === doc.data().email) {
                // console.log(currentUser.email)
                this.userId = doc.id
                console.log(this.userId, 'userId collected')
                db.collection('users')
                  .doc(this.userId)
                  .update({
                    user: this.user
                  })
                  .then(() => {
                    alert('Updated successfully')
                    console.log('document updated sucessfully')
                  })
                  .catch(() => {
                    alert('Error updating data')
                    console.log('Error updating document')
                  })
              }
            })
          })
      }
      // })
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      console.log(files, 'files content')
      const filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      console.log(fileReader)
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
      this.onUpload()
      this.pause()
    },
    onUpload () {
      console.log(this.image, 'imagesss')
      // Create a root reference
      const storageRef = firebase.storage().ref()
      // Create a reference to 'images/mountains.jpg'
      const mountainImagesRef = storageRef.child(this.image.name)
      mountainImagesRef.put(this.image)
        .then((snapshot) => {
          console.log(snapshot, 'snapshot')
        })
        .catch(err => console.log(err))
    },
    pause () {
      const storageRef = firebase.storage().ref()
      const uploadTask = storageRef.child(this.image.name).put(this.image)
      // Pause the upload
      // uploadTask.pause()
      // console.log(uploadTask.pause(), 'pause')
      // var uploadTask = storageRef.child('images/rivers.jpg').put(file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + this.progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.log(error)
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL)
          })
        }
      )
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // this.user = user_
        // console.log(user, 'main user')
        var db = firebase.firestore()
        db.collection('users')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // console.log(doc.data(), 'in fb')
              if (user && doc.data().email === user.email) {
                this.user = doc.data()
                // console.log(this.user.lastname, 'user')
              }
            })
          })
        console.log(user, 'user logged')
      } else {
        console.log('logged out')
      }
    })
  }
}
</script>

<style  scoped>
body {
  background: rgb(99, 39, 120);
}

.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  background: #97b4df;
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #682773;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}
</style>
