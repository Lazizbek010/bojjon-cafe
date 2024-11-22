<template>
  <div>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Bojjon Cafe CRM"
            nav
          >
            <template v-slot:append>
              <v-btn
                icon="mdi-chevron-left"
                variant="text"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              v-for="(category, i) in categories"
              :key="i"
              prepend-icon="mdi-home-city"
              :title="category.title"
              :value="category.title"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>

    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>

    <RouterView />
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
      categories: [
        { title: "Dashboard", icon: "1" },
        { title: "Units", icon: "1" },
        { title: "Products", icon: "1" },
        { title: "Foods", icon: "1" },
        { title: "Orders", icon: "1" },
        { title: "History", icon: "1" },
        { title: "Logout", icon: "1" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>