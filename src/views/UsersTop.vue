<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import UserCard from "../components/UserCard.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$M0JjkO4REiJUgO9nJH8CJeW2PkYYSFYUD8.eExcHRvfTaYAyWEbya",
      isAdmin: true,
      image: "https://i.imgur.com/WVkkrFw.jpeg",
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-07-07T06:19:04.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$M0JjkO4REiJUgO9nJH8CJeW2PkYYSFYUD8.eExcHRvfTaYAyWEbya",
          isAdmin: true,
          image: "https://i.imgur.com/WVkkrFw.jpeg",
          createdAt: "2022-05-26T14:29:23.000Z",
          updatedAt: "2022-07-07T06:19:04.000Z",
          Followship: {
            followerId: 1,
            followingId: 1,
            createdAt: "2022-06-27T08:36:17.000Z",
            updatedAt: "2022-06-27T08:36:17.000Z",
          },
        },
        {
          id: 81,
          name: "Donkey",
          email: "donkey@example.com",
          password:
            "$2a$10$tjmssfWwgDgfKj8pzoY5GuelvIxm7y9GkVoY.d2nqm/c7WT2MibKK",
          isAdmin: false,
          image: "https://i.imgur.com/L3wPbJn.jpeg",
          createdAt: "2022-06-28T15:47:12.000Z",
          updatedAt: "2022-07-05T13:14:31.000Z",
          Followship: {
            followerId: 81,
            followingId: 1,
            createdAt: "2022-07-05T12:51:32.000Z",
            updatedAt: "2022-07-05T12:51:32.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$KSYR4XLJ2pIi5cCv00sSjeAPqbLRIPExv.GM7hH8pWBJD/UQkJdPW",
          isAdmin: false,
          image: null,
          createdAt: "2022-05-26T14:29:23.000Z",
          updatedAt: "2022-05-26T14:29:23.000Z",
          Followship: {
            followerId: 2,
            followingId: 1,
            createdAt: "2022-07-06T22:47:28.000Z",
            updatedAt: "2022-07-06T22:47:28.000Z",
          },
        },
      ],
      FollowerCount: 3,
      isFollowed: true,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$KSYR4XLJ2pIi5cCv00sSjeAPqbLRIPExv.GM7hH8pWBJD/UQkJdPW",
      isAdmin: false,
      image: null,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$M0JjkO4REiJUgO9nJH8CJeW2PkYYSFYUD8.eExcHRvfTaYAyWEbya",
          isAdmin: true,
          image: "https://i.imgur.com/WVkkrFw.jpeg",
          createdAt: "2022-05-26T14:29:23.000Z",
          updatedAt: "2022-07-07T06:19:04.000Z",
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: "2022-07-07T08:51:01.000Z",
            updatedAt: "2022-07-07T08:51:01.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 81,
      name: "Donkey",
      email: "donkey@example.com",
      password: "$2a$10$tjmssfWwgDgfKj8pzoY5GuelvIxm7y9GkVoY.d2nqm/c7WT2MibKK",
      isAdmin: false,
      image: "https://i.imgur.com/L3wPbJn.jpeg",
      createdAt: "2022-06-28T15:47:12.000Z",
      updatedAt: "2022-07-05T13:14:31.000Z",
      Followers: [
        {
          id: 81,
          name: "Donkey",
          email: "donkey@example.com",
          password:
            "$2a$10$tjmssfWwgDgfKj8pzoY5GuelvIxm7y9GkVoY.d2nqm/c7WT2MibKK",
          isAdmin: false,
          image: "https://i.imgur.com/L3wPbJn.jpeg",
          createdAt: "2022-06-28T15:47:12.000Z",
          updatedAt: "2022-07-05T13:14:31.000Z",
          Followship: {
            followerId: 81,
            followingId: 81,
            createdAt: "2022-07-06T14:39:04.000Z",
            updatedAt: "2022-07-06T14:39:04.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$Cz5WOE03h2zV5aGJCiBFK.DSomlj/OfBusIIGuAo/NdFbpZm1LvIW",
      isAdmin: false,
      image: null,
      createdAt: "2022-05-26T14:29:23.000Z",
      updatedAt: "2022-05-26T14:29:23.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 11,
      name: "123",
      email: "a1093353@nuk.edu.tw",
      password: "$2a$10$sgaFTysYu344LFLNkOifQuRYXgyVB1kHOCqNPUT6FQXrjOJ.tMb7u",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-04T09:36:38.000Z",
      updatedAt: "2022-06-04T09:36:38.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 21,
      name: "1",
      email: "1@123",
      password: "$2a$10$b8DU8U96n2XKCi.5xhUAwOuT717QdIdjE3w3RnLEv.pTZ5EzkvdoO",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-06T08:30:28.000Z",
      updatedAt: "2022-06-06T08:30:28.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 31,
      name: "a",
      email: "apple@gmail.com",
      password: "$2a$10$FmSDp6BwRmyrlg2DU4TCV.pgPE62..I4ikcQO4.itWvp7gb.mlH5q",
      isAdmin: false,
      image: "https://i.imgur.com/sOvLPgN.jpeg",
      createdAt: "2022-06-07T06:52:28.000Z",
      updatedAt: "2022-06-07T06:54:03.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 41,
      name: "zj",
      email: "winnie.zheng02@gmail.com",
      password: "$2a$10$xov5ED0Z0uUnYw9xd1/lZeXhvbbIW0Ji21G1UAP0dccItxjhQCFCO",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-08T09:35:08.000Z",
      updatedAt: "2022-06-08T09:35:08.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 51,
      name: "45645646",
      email: "hyt27473@gmail.com",
      password: "$2a$10$vDIn3y5KmF99M2kY2Oly6eCR.K11KWo3GVFFD/zQQY9bcCxujaTgC",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-18T11:49:04.000Z",
      updatedAt: "2022-06-18T11:49:04.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 61,
      name: "123",
      email: "11111@hhh.com",
      password: "$2a$10$sT7XZsnpjxqjGi4O6OnMf.YCl/5bk0UzutrAl2R72htZHBX.9n1dC",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-23T15:01:37.000Z",
      updatedAt: "2022-06-23T15:01:37.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 71,
      name: null,
      email: "email@example.com",
      password: "$2a$10$J1o/pLautYehTbEjtYIiWOLGxLU7AAzdrYD1w7sfMWwtVJRgQKIda",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-28T06:09:50.000Z",
      updatedAt: "2022-06-28T06:09:50.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 91,
      name: "陳小明",
      email: "qwe752166@yahoo.com.tw",
      password: "$2a$10$fLV4ID84LkVkoDkdWrSKPuE1I5xzaXCYKTC6r9pz1zdgt6lFH/JMK",
      isAdmin: false,
      image: null,
      createdAt: "2022-06-29T05:11:56.000Z",
      updatedAt: "2022-06-29T05:11:56.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
export default {
  components: {
    NavTabs,
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUserTops();
  },
  methods: {
    fetchUserTops() {
      this.users = dummyData.users;
    },
  },
};
</script>
