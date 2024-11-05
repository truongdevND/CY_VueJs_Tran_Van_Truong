<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],
}
</script>

<template>
  <div>
    <label class="flex items-center cursor-pointer">
      <input
        type="checkbox"
        class="hidden"
        :checked="checked"
        @change="$emit('change', $event.target.checked)"
      />
      <span class="flex border-5 border-red-500 border-[1px] w-5 h-5 justify-center bg-white items-center relative">
        <svg v-if="checked" class="dot w-5 h-5 absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,255.98959,255.98959">
          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="none" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
            <g transform="scale(4,4)">
              <ellipse cx="32.607" cy="61" rx="23" ry="3" fill="#b50000" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" opacity="0.3"></ellipse>
              <path d="M26,55c-1.27,0 -2.497,-0.484 -3.426,-1.359l-17,-16c-2.011,-1.893 -2.107,-5.057 -0.214,-7.068c1.892,-2.011 5.057,-2.108 7.068,-0.214l13.175,12.401l25.593,-30.005c1.792,-2.101 4.948,-2.352 7.049,-0.56c2.101,1.792 2.352,4.948 0.56,7.049l-29,34c-0.888,1.042 -2.164,1.673 -3.531,1.748c-0.092,0.006 -0.183,0.008 -0.274,0.008z" fill="#c90600" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"></path>
              <path d="M10.027,32.907l4.349,4.093" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <g stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter">
                <path d="M34.804,39.677c1.792,-2.101 1.542,-5.257 -0.559,-7.049l-8.642,10.132l-13.176,-12.401c-1.344,-1.266 -3.199,-1.621 -4.849,-1.131c-0.39,1.677 0.078,3.507 1.422,4.772l13.176,12.401c0.93,0.875 2.156,1.359 3.427,1.359c0.091,0 0.182,-0.002 0.273,-0.007c1.367,-0.075 2.643,-0.707 3.531,-1.748z" fill="#ffffff" opacity="0.3"></path>
                <path d="M59.697,14.345c-1.695,-0.306 -3.499,0.25 -4.697,1.655l-14.292,16.755c-1.792,2.101 -1.542,5.257 0.56,7.049v0l17.536,-20.56c1.198,-1.404 1.463,-3.274 0.893,-4.899z" fill="#b50000" opacity="0.15"></path>
              </g>
            </g>
          </g>
        </svg>
      </span>
    </label>
  </div>
</template>
