<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :category-id="categoryId"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Ms. Ethyl Ritchie",
      tel: "(812) 846-7656 x519",
      address: "033 Kiehn Lights",
      opening_hours: "08:00",
      description: "Ullam expedita voluptates ullam et sint ea.\r\nExped",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.431765761939666",
      viewCounts: 81,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-07T10:59:47.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Allison Balistreri",
      tel: "621.029.0471 x45892",
      address: "40567 Jerde Ford",
      opening_hours: "08:00",
      description: "Aut totam at voluptate modi error voluptatem aut.\n",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.759814349396834",
      viewCounts: 21,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-07T05:18:26.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 3,
      name: "Gerda Sauer",
      tel: "995.890.5814 x913",
      address: "30533 Brekke Skyway",
      opening_hours: "08:00",
      description: "Animi ut sint assumenda eum et dolor consequuntur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.18583236992266",
      viewCounts: 10,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-30T08:46:20.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 4,
      name: "Austen Rath",
      tel: "612-059-3674 x5457",
      address: "1332 Grady Wall",
      opening_hours: "08:00",
      description: "Aut quia soluta harum quia consectetur maxime dist",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.283873428322751",
      viewCounts: 2,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-07T05:18:58.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 5,
      name: "Shyanne Senger",
      tel: "945.096.2423 x294",
      address: "971 Hammes Mills",
      opening_hours: "08:00",
      description: "Porro et ut voluptatem qui quia optio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.61414848792951",
      viewCounts: 2,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-09T00:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 6,
      name: "Bennie Rath",
      tel: "428-831-5333 x252",
      address: "328 Ernest Extension",
      opening_hours: "08:00",
      description: "facere",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.96488402986787",
      viewCounts: 1,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-23T15:02:30.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Jed Hudson",
      tel: "058.101.8871",
      address: "25134 Eliezer Junctions",
      opening_hours: "08:00",
      description: "Quos aut corporis numquam nihil. Sed tenetur vero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.10782120502084",
      viewCounts: 1,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-18T11:51:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Izaiah Shanahan",
      tel: "1-263-753-8716 x8392",
      address: "970 Veda Rue",
      opening_hours: "08:00",
      description: "Voluptates et qui quis fuga magnam accusantium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.40591279878979",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Libby Stark",
      tel: "(029) 831-3439 x429",
      address: "80323 Sarina Brook",
      opening_hours: "08:00",
      description: "pariatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.37008379139739",
      viewCounts: 0,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日式料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-06-29T06:31:48.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Arvid Shanahan DDS",
      tel: "835.168.0376 x342",
      address: "41170 Ernie Bridge",
      opening_hours: "08:00",
      description: "Id aliquam cumque nemo nam ducimus similique iste.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.565553067196824",
      viewCounts: 2,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-06T08:10:44.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-26T14:29:23.000Z",
        updatedAt: "2022-05-26T14:29:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
    },
    {
      id: 2,
      name: "日式料理",
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-06-29T06:31:48.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5, 6],
  prev: 1,
  next: 2,
};
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },

  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
