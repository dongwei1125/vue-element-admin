<template>
  <div>
    <sticky class-name="sub-navbar" :z-index="11">
      <el-dropdown trigger="click">
        <el-button plain>
          {{ $t('componentPage.platform') }}
          <i class="el-icon-caret-bottom el-icon--right" />
        </el-button>

        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="platforms">
            <el-checkbox v-for="item in platformOptions" :key="item.value" :label="item.value">
              {{ $t(item.label) }}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button plain>
          {{ $t('componentPage.link') }}
          <i class="el-icon-caret-bottom el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-input v-model="url" :placeholder="$t('componentPage.inputContent')">
            <template slot="prepend">URL</template>
          </el-input>
        </el-dropdown-menu>
      </el-dropdown>

      <el-date-picker
        v-model="datetime"
        type="datetime"
        format="yyyy/MM/dd HH:mm:ss"
        :placeholder="$t('componentPage.releaseTime')"
      />

      <el-button type="success">{{ $t('componentPage.publish') }}</el-button>
    </sticky>

    <ul>
      <li>
        <p class="tips">{{ $t('componentPage.sticky') }}</p>
      </li>

      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>

      <li>
        <sticky :sticky-top="200">
          <el-button type="primary">10</el-button>
        </sticky>
      </li>

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
    </ul>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'

export default {
  name: 'StickyPage',
  components: { Sticky },
  data() {
    return {
      platforms: [],
      platformOptions: [
        { value: 'a', label: 'componentPage.platformA' },
        { value: 'b', label: 'componentPage.platformB' },
        { value: 'c', label: 'componentPage.platformC' },
      ],
      url: '',
      datetime: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.el-dropdown,
.el-date-editor {
  margin-right: 6px;
}

ul {
  padding: 20px;
  margin: 0;

  li {
    padding: 10px;
    margin: 0;
    list-style: none;
  }
}

.tips {
  padding: 8px 24px;
  margin: 0 0 20px;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
}

::v-deep .sub-navbar {
  height: 50px;
  line-height: 50px;
  width: 100%;
  text-align: right;
  padding-right: 20px;
  background-image: linear-gradient(
    90deg,
    rgba(32, 182, 249, 1) 0%,
    rgba(32, 182, 249, 1) 0%,
    rgba(33, 120, 241, 1) 100%,
    rgba(33, 120, 241, 1) 100%
  );
  position: relative;
}
</style>
