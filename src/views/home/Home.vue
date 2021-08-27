<template>
  <div>
    <navigation class="nav-home">
      <div slot="center">首页</div>
    </navigation>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature-view></home-feature-view>
    <tab-control :text="['流行','新款','精选']"></tab-control>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
    <li>32</li>
    <li>33</li>
    <li>34</li>
    <li>35</li>
    <li>36</li>
    <li>37</li>
    <li>38</li>
    <li>39</li>
    <li>40</li>
    <li>41</li>
    <li>42</li>
    <li>43</li>
    <li>44</li>
    <li>45</li>
    <li>46</li>
    <li>47</li>
    <li>48</li>
    <li>49</li>
    <li>50</li>
  </div>
</template>

<script>
  import Navigation from 'components/common/navigation/Navigation'
  import HomeSwiper from './childComponents/HomeSwiper'
  import HomeRecommend from './childComponents/HomeRecommend'
  import HomeFeatureView from './childComponents/HomeFeatureView'

  import TabControl from 'components/content/tabControl/TabControl'
  // 为避免组件和axios请求耦合性过高，又封装了一个中间层home.js
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      'navigation': Navigation,
      HomeSwiper,
      HomeRecommend,
      HomeFeatureView,
      TabControl
    },
    created() {
      getHomeMultidata().then(res => {
        // console.log(res);
        // created生命周期函数回调完成后会销毁，因此其中数据需要保存在data中
        this.recommends = res.data.recommend.list;
        this.banners = res.data.banner.list;
      });
    }
  }
</script>

<style scoped>
  .nav-home {
    position: fixed;
    width: 100%;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 99;
  }
  #hy-swiper {
    padding-top: 44px;
  }
  .tab-control {
    background-color: #f3f3f3;
    border-radius: 2px;
    position: sticky;
    top: 44px;
  }
</style>
