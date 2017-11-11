<template>
  <table @click="handleMonthTableClick" class="b-month-table">
    <tbody>
    <tr>
      <td :class="getCellStyle(0)">
        <a class="cell">一月</a>
      </td>
      <td :class="getCellStyle(1)">
        <a class="cell">二月</a>
      </td>
      <td :class="getCellStyle(2)">
        <a class="cell">三月</a>
      </td>
      <td :class="getCellStyle(3)">
        <a class="cell">四月</a>
      </td>
    </tr>
    <tr>
      <td :class="getCellStyle(4)">
        <a class="cell">五月</a>
      </td>
      <td :class="getCellStyle(5)">
        <a class="cell">六月</a>
      </td>
      <td :class="getCellStyle(6)">
        <a class="cell">七月</a>
      </td>
      <td :class="getCellStyle(7)">
        <a class="cell">八月</a>
      </td>
    </tr>
    <tr>
      <td :class="getCellStyle(8)">
        <a class="cell">九月</a>
      </td>
      <td :class="getCellStyle(9)">
        <a class="cell">十月</a>
      </td>
      <td :class="getCellStyle(10)">
        <a class="cell">十一月</a>
      </td>
      <td :class="getCellStyle(11)">
        <a class="cell">十二月</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import { hasClass } from 'src/utils/dom';

  export default {
    props: {
      disabledDate: {},
      date: {},
      month: {
        type: Number
      }
    },
    methods: {
      getCellStyle(month) {
        const style = {};
        const date = new Date(this.date);

        date.setMonth(month);
        style.disabled = typeof this.disabledDate === 'function' &&
          this.disabledDate(date);
        style.current = this.month === month;

        return style;
      },

      handleMonthTableClick(event) {
        const target = event.target;
        if (target.tagName !== 'A') return;
        if (hasClass(target.parentNode, 'disabled')) return;
        const column = target.parentNode.cellIndex;
        const row = target.parentNode.parentNode.rowIndex;
        const month = row * 4 + column;

        this.$emit('pick', month);
      }
    }
  };
</script>
