<template>
  <div class="career-container">
    <h1>Apply for a Job</h1>
    <p>Please leave your details below and upload the required documents so that we can get in touch with you.</p>

    <!-- Job Application Form -->
    <form @submit.prevent="handleSubmit" class="application-form">
      <div class="form-group">
        <label for="name">Your Name (*)</label>
        <input 
          type="text" 
          id="name" 
          v-model="form.name" 
          placeholder="Your Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="date_of_birth">Date of Birth (*)</label>
        <input 
          type="date" 
          id="date_of_birth" 
          v-model="form.date_of_birth" 
          required
        />
      </div>

      <div class="form-group">
        <label for="phone_no">Contact Number (*)</label>
        <input 
          type="tel" 
          id="phone_no" 
          v-model="form.phone_no" 
          placeholder="Contact Number"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email Address (*)</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          placeholder="Your Email"
          required
        />
      </div>

      <div class="form-group">
        <label for="address">Address (*)</label>
        <input 
          type="text" 
          id="address" 
          v-model="form.address" 
          placeholder="Your Address"
          required
        />
      </div>

      <div class="form-group">
        <label for="district">Your District</label>
        <input 
          type="text" 
          id="district" 
          v-model="form.district" 
          placeholder="Your District (Optional)"
        />
      </div>

      <div class="form-group">
        <label for="prof_exp">Years of Professional Experience (if any)</label>
        <input 
          type="text" 
          id="prof_exp" 
          v-model="form.prof_exp" 
          placeholder="Professional Experience (Optional)"
        />
      </div>

      <div class="form-group">
        <label for="education">Education (Last Completed Degree)</label>
        <input 
          type="text" 
          id="education" 
          v-model="form.education" 
          placeholder="Last Completed Degree"
        />
      </div>

      <div class="form-group">
        <label for="cv">Upload CV (Required)</label>
        <input 
          type="file" 
          id="cv" 
          @change="handleFileUpload" 
          accept=".pdf,.doc,.docx"
          required
        />
        <p v-if="cvFileName" class="file-name">Uploaded: {{ cvFileName }}</p>
      </div>

      <button type="submit" :disabled="!isFormValid">Submit Application</button>
    </form>
  </div>
</template>

<script>
import DataService from "../services/DataService"; // Make sure DataService is correctly implemented
import router from '@/router';

export default {
  name: 'Career',
  data() {
    return {
      form: {
        name: '',
        date_of_birth: '',
        phone_no: '',
        email: '',
        address: '',
        district: '',
        prof_exp: '',
        education: ''
      },
      resume_pdf: null,
      cvFileName: ''
    };
  },
  computed: {
    isFormValid() {
      return (
        this.form.name &&
        this.form.date_of_birth &&
        this.form.phone_no &&
        this.form.email &&
        this.form.address &&
        this.resume_pdf
      );
    }
  },
  methods: {
    handleSubmit() {
      // Collect form data
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('date_of_birth', this.form.date_of_birth);
      formData.append('phone_no', this.form.phone_no);
      formData.append('email', this.form.email);
      formData.append('address', this.form.address);
      formData.append('district', this.form.district);
      formData.append('prof_exp', this.form.prof_exp);
      formData.append('education', this.form.education);
      formData.append('resume_pdf', this.resume_pdf); // Append file

      // Send the data to your API via DataService
      DataService.career(formData)
        .then(response => {
          console.log(response)
          if (response.data) {
            router.push({ name: 'home' });  // Redirect after success
          } else {
            alert(response.data.error);
          }
        })
        .catch(error => {
          console.error("There was an error with the submission:", error);
          alert("There was an error with the submission. Please try again.");
        });

      // Reset form after submission
      this.form = {
        name: '',
        date_of_birth: '',
        phone_no: '',
        email: '',
        address: '',
        district: '',
        prof_exp: '',
        education: ''
      };
      this.resume_pdf = null;
      this.cvFileName = '';
      alert('Your application has been submitted successfully!');
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.resume_pdf = file;
        this.cvFileName = file.name;
      }
    }
  }
};
</script>

<style scoped>
.career-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.application-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: rgb(216, 94, 94);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

button:disabled {
  background-color: #e26464;
  cursor: not-allowed;
}

button:hover {
  background-color: #45a049;
}

.file-name {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
}
</style>
