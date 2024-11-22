<template>
        <v-app>
          <v-container class="d-flex justify-center align-center" style="height: 100vh;">
            <v-card class="pa-8" max-width="400">
              <!-- Welcome Text -->
              <v-card-title class="text-h5 text-center">Welcome Back</v-card-title>
              <v-card-subtitle class="text-center mb-4">Sign in to your account</v-card-subtitle>
      
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <!-- Email Input -->
                  <v-text-field
                    v-model="email"
                    label="Email"
                    placeholder="Enter your email"
                    :rules="[rules.required, rules.email]"
                    type="email"
                    outlined
                    dense
                    required
                  />
                  <!-- Password Input -->
                  <v-text-field
                    v-model="password"
                    label="Password"
                    placeholder="Enter your password"
                    :rules="[rules.required]"
                    type="password"
                    outlined
                    dense
                    required
                  />
                  <!-- Submit Button -->
                  <v-btn :disabled="!valid" color="error" block class="mt-4" @click="submitForm">
                    Sign in
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-container>
        </v-app>
      </template>
      
      <script>
      export default {
        data() {
          return {
            email: "",
            password: "",
            valid: false,
            rules: {
              required: (value) => !!value || "This field is required.",
              email: (value) =>
                /.+@.+\..+/.test(value) || "E-mail must be valid.",
            },
          };
        },
        methods: {
          submitForm() {
            if (this.$refs.form.validate()) {
              alert("Login successful!");
            }
          },
        },
      };
      </script>
      
      <style scoped>
      /* Background customization (optional) */
      v-container {
        background-color: #f9fafb; /* light background */
      }
      </style>
      