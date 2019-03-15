export const itemMixin = {
  data () {
    return {
      active: false,
      childActive: false,
      itemShow: false
    }
  },
  created () {
    //This line has been amended so that 'item.href' does not need to be defined before the 'active' status is set.
    this.active = this.item && typeof this.item.href != 'undefined' ? this.isLinkActive(this.item) : false
    this.childActive = this.item && this.item.child ? this.isChildActive(this.item.child) : false
    if (this.item && this.item.child) {
      if (this.showChild) {
        this.itemShow = true
      } else {
        this.itemShow = this.isLinkActive(this.item) || this.isChildActive(this.item.child)
        if (this.showOneChild && !this.showChild && (this.active || this.childActive) && this.firstItem) {
          this.emitActiveShow(this._uid)
        }
      }
    }

    if (!this.$router) {
      window.addEventListener('hashchange', () => {
        //This line has been amended so that 'item.href' does not need to be defined before the 'active' status is set.
        this.active = this.item && typeof this.item.href != 'undefined' ? this.isLinkActive(this.item) : false
        this.childActive = this.item && this.item.child ? this.isChildActive(this.item.child) : false
      })
    }
  },
  methods: {
    toggleDropdown () {
      this.itemShow = !this.itemShow
    },
    isLinkActive (item) {
      //This has been added so that the 'title' of the active step in a multi-step form can be used to determine whether the menu item should be 'active'.
      if(this.formActiveStepData){
        return item.title == this.formActiveStepData.title
      } else {
      if (this.$route) {
        return item.href === this.$route.path + this.$route.hash
      } else {
        return item.href === window.location.pathname + window.location.hash
      }
    }
    },
    isChildActive (child) {
      for (let item of child) {
        if (this.isLinkActive(item)) {
          return true
        }
        if (item.child) {
          if (this.isChildActive(item.child)) {
            return true
          }
        }
      }
      return false
    },
    clickEvent (event, mobileItem) {
      this.emitItemClick(event, this.item)

      if (this.item.disabled || (mobileItem && !(typeof this.item.href != 'undefined'))) {
        event.preventDefault()
        return
      }

      if (this.isCollapsed && this.firstItem && !this.item.child) {
        this.$parent.$emit('clickItem')
      }

      if (!mobileItem && this.item.child) {
        if (this.isCollapsed && this.firstItem) {
          event.preventDefault()
          return
        }
        if (this.isRouterLink) {
          if (this.firstItem && this.showOneChild && !this.showChild) {
            if (this.active) {
              if (this.activeShow.uid === this._uid) {
                this.itemShow = false
                this.emitActiveShow(null)
              } else {
                this.itemShow = true
                this.emitActiveShow(this._uid)
              }
            } else {
              this.itemShow = true
              this.emitActiveShow(this._uid)
            }
          } else {
            this.active ? this.toggleDropdown() : this.itemShow = true
          }
        } else if (!(typeof this.item.href != 'undefined')) {
          event.preventDefault()
          if (this.firstItem && this.showOneChild && !this.showChild) {
            if (this.activeShow.uid === this._uid) {
              this.itemShow = false
              this.emitActiveShow(null)
            } else {
              this.itemShow = true
              this.emitActiveShow(this._uid)
            }
          } else {
            this.toggleDropdown()
          }
        }
      } else if (!mobileItem && !this.isCollapsed && this.firstItem && !this.item.child) {
        this.emitActiveShow(null)
      }
    }
  },
  computed: {
    isRouterLink () {
      return this.$router && this.item && this.item.href !== undefined
    },
    show () {
      if (!this.item || !this.item.child) return false
      if (this.firstItem && this.showOneChild && !this.showChild) {
        if (!this.activeShow.uid) {
          return false
        } else {
          return this._uid === this.activeShow.uid
        }
      } else {
        return this.itemShow
      }
    }
  },
  watch: {
    $route () {
      this.active = this.item && typeof this.item.href != 'undefined' ? this.isLinkActive(this.item) : false
      this.childActive = this.item && this.item.child ? this.isChildActive(this.item.child) : false
    },
    formActiveStepData: {
    //This watch function has been added so that the component will be aware of when the current step changes in a multi-step form wizard.
    //When there is a change it will update the active status of the relevant menu item.
      handler: function(){
        this.active = this.item && typeof this.item.href != 'undefined' ? this.isLinkActive(this.item) : false
        this.childActive = this.item && this.item.child ? this.isChildActive(this.item.child) : false
      },
      deep:true,
      immediate:true 
    }
  },
  inject: ['showChild', 'showOneChild', 'emitActiveShow', 'activeShow', 'emitItemClick', 'rtl']
}

export const animationMixin = {
  methods: {
    expandEnter (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    expandAfterEnter (el) {
      el.style.height = 'auto'
    },
    expandBeforeLeave (el) {
      if (this.isCollapsed) {
        el.style.display = 'none'
        return
      }
      el.style.height = el.scrollHeight + 'px'
    }
  }
}
