<template>
  <div class="service">
    <div class="header">
      <span>服务</span>
    </div>
    <div class="main">
      <div class="choicebox">
        <ul class="choice">
          <li>
            <a href="#" @click="goto30()">
              <img src="../assets/img/zhuanban.png" alt />
              <p>转班</p>
            </a>
          </li>
          <li>
            <a href="#" @click="goto31()">
              <img src="../assets/img/tiaoke.png" alt />
              <p>调课</p>
            </a>
          </li>
          <li>
            <a href="#" @click="goto32()">
              <img src="../assets/img/xubao.png" alt />
              <p>续报</p>
            </a>
          </li>
          <li>
            <a href="#" @click="goto33()">
              <img src="../assets/img/gonggu.png" alt />
              <p>巩固</p>
            </a>
          </li>
          <li>
            <a href="#" @click="goto34()">
              <img src="../assets/img/tuiban.png" alt />
              <p>退班</p>
            </a>
          </li>
        </ul>
      </div>

      <div class="calendar-container">
        <div class="year">
          <div>
            <span class="fl" @click="lastYear">«</span>
            <span class="fl" @click="lastMonth">‹</span>
            <p>{{nowDate.year}}年{{nowDate.month+1}}月</p>
            <span class="fr" @click="nextYear">»</span>
            <span class="fr" @click="nextMonth">›</span>
          </div>
        </div>
        <ul class="week">
          <li v-for="(o,index) in 7" :key="o">{{formatWeek(index)}}</li>
        </ul>
        <ul class="date">
          <li class="none-week" v-for="o in lastMonthDays" :key="o+50">{{lastMonthStartDay+o-1}}</li>
          <li @click="clickEvent" v-for="day in nowMonthDays" :key="day">{{day}}</li>
          <li
            class="none-week"
            v-for="day in (42-lastMonthDays-nowMonthDays)"
            :key="day+100"
          >{{day}}</li>
        </ul>
      </div>
      <div>
        <img src="../assets/img/checkleesons.jpg" style="width: 8.33333rem;height:5.33333rem;" alt />
      </div>
      <div class="reading">
        <strong>在读课程</strong>
        <span class="learn">我的学习历程</span>
      </div>
      <i>
        <img
          src="../assets/img/readingclass.jpg"
          style="width:8rem;height:6rem;padding-left: .633333rem;"
          alt
        />
      </i>
    </div>
  </div>
</template>
<script>
import { FullCalendar } from "vue-fullcalendar";

export default {
  props: ["start-date"],
  data() {
    return {
      selectDate: [], //选择日期列表
      nowDate: this.getDate(new Date()) //当前设置时间 默认为当前系统时间
    };
  },
  computed: {
    lastMonthDays() {
      return this.startWeek();
    },
    lastMonthStartDay() {
      return (
        this.calcLastMonthDays(this.nowDate.year, this.nowDate.month) -
        (this.startWeek() - 1)
      );
    },
    nowMonthDays() {
      return this.calcDays(this.nowDate.year, this.nowDate.month);
    }
  },
  created() {
    if (this.setDate) {
      this.nowDate = this.getDate(this.setDate);
    }
  },
  methods: {
    getDate(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay(),
        date: date.getDate()
      };
    },
    formatWeek(day) {
      switch (day) {
        case 0:
          return "日";
        case 1:
          return "一";
        case 2:
          return "二";
        case 3:
          return "三";
        case 4:
          return "四";
        case 5:
          return "五";
        case 6:
          return "六";
      }
    },
    //判断闰年
    isLeapYear(year) {
      return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    },
    //根据日子计算星期
    calcWeekend(year, month, day) {
      return new Date(year, month, day).getDay();
    },
    //计算某年某月的天数
    calcDays(year, month) {
      const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (this.isLeapYear(year) && month === 1) return 29;
      else return monthDay[month];
    },
    //计算上个月天数
    calcLastMonthDays(year, month) {
      if (month === 0) {
        return this.calcDays(year - 1, 11);
      } else {
        return this.calcDays(year, month - 1);
      }
    },
    //上月
    lastMonth() {
      if (this.nowDate.month === 0) {
        this.nowDate.month = 11;
        this.nowDate.year--;
      } else {
        this.nowDate.month--;
      }
    },
    //下月
    nextMonth() {
      if (this.nowDate.month === 11) {
        this.nowDate.month = 0;
        this.nowDate.year++;
      } else {
        this.nowDate.month++;
      }
    },
    //去年
    lastYear() {
      this.nowDate.year--;
    },
    //下一年
    nextYear() {
      this.nowDate.year++;
    },
    //计算当月开始星期
    startWeek() {
      return this.calcWeekend(this.nowDate.year, this.nowDate.month, 1);
    },
    //
    clickEvent(e) {
      let monthNo = this.nowDate.month;
      let month = monthNo <= 11 ? monthNo + 1 : 0;
      let date = {
        year: this.nowDate.year,
        month: month,
        week: new Date(
          this.nowDate.year,
          this.nowDate.month,
          e.target.innerText
        ).getDay(),
        day: Number(e.target.innerText)
      };
      this.$emit("click-event", date);
    },
      goto30(name){
this.$router.push({name:"Zhuanban"})
  },
    goto31(name){
this.$router.push({name:"Tiaoke"})
  },
    goto32(name){
this.$router.push({name:"Xubao"})
  },
    goto33(name){
this.$router.push({name:"Gonggu"})
  },
    goto34(name){
this.$router.push({name:"Tuiban"})
  }
  },
};
</script>
<style scoped>
.service {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  width: 100%;
  height: 1.2rem;
  padding: 0.303335rem 0 0 0.333335rem;
  box-sizing: border-box;
}
.header span {
  font-weight: bold;
  font-size: 0.533333rem;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.choicebox {
  padding: 0rem 0.233333rem 0rem;
}
.main {
  flex: 1;
  overflow-x: auto;
}

.main::-webkit-scrollbar {
  display: none;
}
.choice {
  display: flex;
  /* justify-content: space-around; */
  justify-content: space-between;
  padding-left: 0.133333rem;
}
.choice p {
  text-align: center;
  color: #6f6f6f;
}

.calendar-container {
  padding: 2vw 3vw;
}
.year {
  text-align: center;
  margin-bottom: 10px;
  height: 30px;
}
.week,
.date {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.week {
  border-bottom: 0.5px solid #ddd;
  margin-bottom: 5px;
  flex-wrap: nowrap;
}
.calendar-container ul {
  padding-left: 0;
}
.calendar-container ul:nth-child(2) {
  display: flex;
  justify-content: space-around;
}
.calendar-container ul:nth-child(3) {
  display: flex;
  justify-content: space-around;
}
.calendar-container ul:nth-child(3) li {
  width: 14.28%;
}
.calendar-container ul > li {
  font-size: 14px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.none-week {
  color: #aaa;
}
.year > div {
  height: 30px;
  overflow: hidden;
}
.year span {
  line-height: 30px;
  font-size: 20px;
  display: inline-block;
  width: 10%;
}
.year p {
  line-height: 1;
  width: 50%;
  display: inline-block;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.reading {
  display: flex;
  justify-content: space-between;
  padding-left: 0.333333rem;
  padding-right: 0.333333rem;
  box-sizing: border-box;
}
strong {
  font-size: 0.533333rem;
}
.learn {
  font-size: 0.4rem;
  color: #7c7c7c;
}
</style>