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
            <label for="dob">Date of Birth (*)</label>
            <input 
              type="date" 
              id="dob" 
              v-model="form.dob" 
              required
            />
          </div>

          <div class="form-group">
            <label for="phone">Contact Number (*)</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
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
            <label for="experience">Years of Professional Experience (if any)</label>
            <input 
              type="text" 
              id="experience" 
              v-model="form.experience" 
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
              change="handleFileUpload" 
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
        export default {
          name: 'Career',
          data() {
            return {
              form: {
                name: '',
                dob: '',
                phone: '',
                email: '',
                address: '',
                district: '',
                experience: '',
                education: ''
              },
              cvFile: null,
              cvFileName: ''
            };
          },
          computed: {
            isFormValid() {
              return (
                this.form.name &&
                this.form.dob &&
                this.form.phone &&
                this.form.email &&
                this.form.address &&
                this.cvFile
              );
            }
          },
          methods: {
            handleSubmit() {
              // Handle form submission, e.g., send the data to an API
              const formData = { ...this.form, cvFile: this.cvFile };
              console.log('Form Data:', formData);
              
              // Reset the form
              this.form = {
                name: '',
                dob: '',
                phone: '',
                email: '',
                address: '',
                district: '',
                experience: '',
                education: ''
              };
              this.cvFile = null;
              this.cvFileName = '';

              alert('Your application has been submitted successfully!');
            },
            handleFileUpload(event) {
              const file = event.target.files[0];
              if (file) {
                this.cvFile = file;
                this.cvFileName = file.name;
              }
            }
          }
        }
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
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 20px;
          }

          button:disabled {
            background-color: #ddd;
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
