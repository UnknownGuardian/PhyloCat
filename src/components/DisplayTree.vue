<template>
<div class="container-fluid" >
  <div class="row">
    <div class="col-12">
      <tree 
        ref="tree"
        :data="phylotree" 
        nodeText="name"
        @clicked="clicked" 
        @expand="expand" 
        @retract="retract" 
        @zoom="zoom" 
        :zoomable="zoomable"
        :layoutType="layoutType" 
        :type="type"
        :duration="duration"
        :style="'max-width:' + width + 'px;max-height:' + height + 'px'"></tree>
    </div>
  </div>
  <div class="row" v-if="editingNode">
    <div class="col-12">
      <h2>Editor</h2>

      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" v-model="editingNode.name" class="form-control" placeholder="Name">
        </div>
      </div>

      <div class="form-group row" v-if="false">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Label Length</label>
        <div class="col-sm-10">
          <input required type="text" v-model="editingNode.length"class="form-control" placeholder="Label Length">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Label Color</label>
        <div class="col-sm-10">
          <!-- <chrome-picker v-model="editingNode.color" />-->
          <button type="button" @click="changeColor('#007bff')" class="btn btn-primary">Blue</button>
          <button type="button" @click="changeColor('#28a745')" class="btn btn-success">Green</button>
          <button type="button" @click="changeColor('#dc3545')" class="btn btn-danger">Red</button>
          <button type="button" @click="changeColor('#ffc107')" class="btn btn-warning">Gold</button>
          <button type="button" @click="changeColor('#17a2b8')" class="btn btn-info">Teal</button>
          <button type="button" @click="changeColor('#868e96')" class="btn btn-secondary">Grey</button>
          <button type="button" @click="changeColor('#343a40')" class="btn btn-dark">Dark</button>
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>



<script>
import {tree} from 'vued3tree'
import {Chrome} from 'vue-color'
export default {
  name: 'display-tree',
  components: {
    tree,
    'chrome-picker': Chrome,
  },
  props: {
    phylotree: {
      type: Object,
      default: function () {
        return {
          name: 'father',
          children: [
            {
              name: 'son1',
              children: [
                {name: 'grandson'},
                {name: 'grandson2'}
              ]
            },
            {
              name: 'son2',
              children: [
                {name: 'grandson3'},
                {name: 'grandson4'}
              ]
            }
          ]
        }
      }
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    },
    layoutType: {
      type: String,
      default: 'euclidean'
    },
    type: {
      type: String,
      default: 'tree'
    }
  },
  methods: {
    clicked (param) {
      console.log('Clicked', param)

      if (this.editingNode) {
        if (this.editingNode.name.trim().length === 0) {
          this.editingNode.name = 'unnamed'
        }
      }
      /* if (!param.data.color) {
        param.data.color = JSON.parse(JSON.stringify(this.defaultColors))
      } */
      this.editingNode = param.data
    },
    changeColor (color) {
      console.log('Changed COlor', color)
      this.editingNode.style = {
        'fill': color
      }
      console.log(this.editingNode)
      this.$refs.tree.redraw()
    },
    expand (param, p2) {
      console.log('expand', param)
    },
    retract (param) {
      console.log('retract', param)
    },
    zoom (param) {
      // console.log('zoom', param)
    },
  },
  watch: {
    'editingNode.name': function (name) {
      console.log('Editing Node changed')
      this.$refs.tree.redraw()
    },
    'editingNode.length': function (newNode) {
      console.log('Editing Node changed')
      this.$refs.tree.redraw()
    },
  },
  data () {
    return {
      name: 'Meow',
      zoomable: true,
      showModal: false,
      editingNode: null,
      unwatch: null,
      duration: 10,
      /* defaultColors: {
        hex: '#194d33',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      } */
    }
  }
}
</script>
