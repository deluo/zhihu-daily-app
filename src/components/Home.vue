<template>
  <div>
    <div class="header">
      <drawer width="200px" :show.sync="drawerVisibility">

        <!-- drawer conent -->
        <div slot="drawer">
          <group title="Drawer demo(beta)" style="margin-top:20px;">
            <cell title="Demo" link="/demo" value="演示" @click.native="drawerVisibility = false">
            </cell>
            <cell title="Buy me a coffee" link="project/donate" @click.native="drawerVisibility = false">
            </cell>
            <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
            </cell>
          </group>
        </div>

        <!-- main conent -->
        <x-header v-if="isShowNav" slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
          :left-options="leftOptions" :right-options="rightOptions"  :transition="headerTransition"
          @on-click-more="onClickMore">
          <span  slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
        </x-header>

      </drawer>
    </div>
    <keep-alive>
      <transition>
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  import {
    Drawer,
    XHeader,
    Group,
    Cell,
  } from "vux";
  export default {
    name: "Home",
    components: {
      Drawer,
      XHeader,
      Group,
      Cell,
    },
    data() {
      return {
        drawerVisibility: true
      };
    },
    created() {},
    methods: {
      isShowNav() {
        if (this.entryUrl.indexOf('hide-nav') > -1) {
          return false
        }
        return true
      },
      leftOptions() {
        return {
          showBack: ""
        }
      },
      rightOptions() {
        return {
          showMore: true
        }
      },
      headerTransition() {
        if (!this.direction) return ''
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
      },
      onClickMore() {
        this.showMenu = true
      },
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    height: 112px;
    background-color: #00a2ed;
  }

</style>
