<template>
    <section class="tabs">
      <div class="layout-wrapper">
        
        <motork-tab-nav />

        <motork-tab-content-wrapper />

      </div>

    </section>

</template>

<script>

import MotorKTabNav from '../TabContent/MotorKTabNav.vue';
import MotorKTabContentWrapper from '../TabContent/MotorKTabContentWrapper.vue';

export default {
    name: 'MotorKTabs',
    components: {
      'motork-tab-nav': MotorKTabNav,
      'motork-tab-content-wrapper': MotorKTabContentWrapper
    }
}
</script>

<style lang="scss">

  /* === TABS === */
  .tabs {
    background-color: rgba(255, 255, 255, .8);
    position: relative;
  }

  .tabs__cmds {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .tabs__cmd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    -webkit-transition: background .2s cubic-bezier(1.000, 0.000, 0.000, 1.000),
    color .4s .1s cubic-bezier(1.000, 0.000, 0.000, 1.000);
    transition: background .2s cubic-bezier(1.000, 0.000, 0.000, 1.000),
    color .4s .1s cubic-bezier(1.000, 0.000, 0.000, 1.000);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-top: 2px solid #212428;
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transition: border-color .5s cubic-bezier(1.000, 0.000, 0.000, 1.000),
      -webkit-transform .3s cubic-bezier(1.000, 0.000, 0.000, 1.000);
      transition: border-color .5s cubic-bezier(1.000, 0.000, 0.000, 1.000),
      -webkit-transform .3s cubic-bezier(1.000, 0.000, 0.000, 1.000);
      transition: border-color .5s cubic-bezier(1.000, 0.000, 0.000, 1.000),
      transform .3s cubic-bezier(1.000, 0.000, 0.000, 1.000);
      transition: border-color .5s cubic-bezier(1.000, 0.000, 0.000, 1.000),
      transform .3s cubic-bezier(1.000, 0.000, 0.000, 1.000),
      -webkit-transform .3s cubic-bezier(1.000, 0.000, 0.000, 1.000);
    }
    &.is-selected {
      color: #F89F1C;
      background-color: #FFFFFF;
      &::before {
        border-top-color: rgba(0, 0, 0, 0);
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
      .tabs__icon {
        stroke-width: 0;
        stroke-dashoffset: 0;
        fill: currentColor;
      }
    }
    & > svg {
      display: block;
      height: auto;
      margin: auto;
    }
  }

  // .tabs__cmd

  // .tabs__cmd

  // .tabs__cmd.is-selected

  // .tabs__cmd.is-selected .tabs__icon {
  //   stroke-width: 0;
  //   stroke-dashoffset: 0;
  //   fill: currentColor;
  // }

  // .tabs__cmd > svg {
  //   display: block;
  //   height: auto;
  //   margin: auto;
  // }

  .tabs__icon {
    stroke: currentColor;
    stroke-width: 2px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 3s 0.5s cubic-bezier(1.000, 0.000, 0.000, 1.000),
    stroke-width .3s,
    fill .3s;
    transition: stroke-dashoffset 3s 0.5s cubic-bezier(1.000, 0.000, 0.000, 1.000),
    stroke-width .3s,
    fill .3s;
    &.is-loaded {
      stroke-dashoffset: 0;
    }
  }

  // .tabs__icon.is-loaded {
  //   stroke-dashoffset: 0;
  // }

  .tabs__icon--partecipate {
    stroke-dasharray: 860;
    stroke-dashoffset: 860;
  }

  .tabs__icon--gallery {
    stroke-dasharray: 490;
    stroke-dashoffset: 490;
  }

  .tabs__icon--showcase {
    stroke-dasharray: 335;
    stroke-dashoffset: 335;
  }

  .tabs__title {
    display: block;
    margin-bottom: 0.5em;
  }

  .tabs__content {
    display: none;
    width: 100%;
    padding: 2em 1em;
    .layout__item {
      min-width: 0;
    }
  }

  // .tabs__content 


</style>

