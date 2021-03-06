<template>
  <div
    class="vsm-item"
    :class="[{'open-item' : show}, {'active-item' : active}, {'parent-active-item' : childActive}]"
  >
    <template v-if="isRouterLink">
      <router-link
        class="vsm-link"
        :to="item.href"
        :disabled="item.disabled"
        :event="item.disabled ? '' : 'click'"
        @click.native="clickEvent"
      >
        <i
          v-if="item.icon"
          class="vsm-icon"
          :class="item.icon"
        />
        <span
          v-if="item.badge"
          :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
          class="vsm-badge"
          :class="[item.badge.class ? item.badge.class : 'default-badge']"
        >{{ item.badge.text }}</span>
        <span class="vsm-title">{{ item.title }}</span>
        <i
          v-if="item.child"
          class="vsm-arrow"
          :class="{'open-arrow' : show}"
        />
      </router-link>
    </template>
    <template v-else>
      <!-- The ':href' has been amended so that the default '#' link is only returned if the 'item.href' is 'undefined' -->
      <a
        class="vsm-link"
        :href="typeof item.href != 'undefined' ? item.href : '#'"
        :disabled="item.disabled"
        @click="clickEvent"
      >
        <i
          v-if="item.icon"
          class="vsm-icon"
          :class="item.icon"
        />
        <span
          v-if="item.badge"
          :style="[rtl ? (item.child ? {'margin-left' : '30px'} : '') : (item.child ? {'margin-right' : '30px'} : '')]"
          class="vsm-badge"
          :class="[item.badge.class ? item.badge.class : 'default-badge']"
        >{{ item.badge.text }}</span>
        <span class="vsm-title">{{ item.title }}</span>
        <i
          v-if="item.child"
          class="vsm-arrow"
          :class="{'open-arrow' : show}"
        />
      </a>
    </template>
    <template v-if="item.child">
      <transition
        name="expand"
        @enter="expandEnter"
        @afterEnter="expandAfterEnter"
        @beforeLeave="expandBeforeLeave"
      >
        <div
          v-if="show"
          class="vsm-dropdown"
        >
          <div class="vsm-list">
            <!-- 'formActiveStepData' has been added here so that its data can be passed through to the 'item' component. -->
            <!-- 'v-show' has been added here so that a menu item can be hidden -->
            <item
              v-for="(subItem, index) in item.child"
              :key="index"
              :item="subItem"
              :formActiveStepData="formActiveStepData"
              v-show="typeof subItem.hidden != 'undefined' ? !subItem.hidden : true"
            />
          </div>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import Item from './Item.vue'
import { itemMixin, animationMixin } from '../mixin'

export default {
  components: {
    Item
  },
  mixins: [itemMixin, animationMixin],
  props: {
    item: {
      type: Object,
      required: true
    },
    //This has been added so that the active form step of a multi-step form can be made available to this component. 
    formActiveStepData:{
	    type: Object
    }
  },
  beforeCreate () {
    this.$options.components.Item = require('./Item.vue').default
  }
}
</script>
