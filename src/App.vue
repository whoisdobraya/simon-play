<template>
  <div id="app">
    <div class="play">
      <h1 class="title">Simon plays</h1>
      <div class="wrapper">
        <div class="options">
          <h2 class="round">Round: {{ round }}</h2>
          <div class="settings">
            <h2 class="settings__title">Settings</h2>
            <ul class="settings__buttons">
              <li
                v-for="level in levels"
                :key="level.value"
                class="settings__button"
              >
                <label :for="level.value">
                  <input
                    :type="level.type"
                    :name="level.value"
                    :value="level.value"
                    :disabled="disabledButton"
                    :id="level.value"
                    v-model="currentLevel"
                  />
                  {{ level.label }}
                </label>
              </li>
            </ul>
          </div>
          <button
            type="button"
            @click="startPlay"
            :disabled="disabledButton"
            class="button-start"
          >
            Start
          </button>
        </div>
        <div>
          <div class="buttons" @click="addUserStep">
            <button
              v-for="button in buttons"
              :key="button.name"
              :data-color="button.color"
              :disabled="stateOfPlay !== 'entering'"
              class="button"
              :class="[
                `button--${button.color}`,
                { active: activeButton === button.color },
              ]"
            ></button>
          </div>
          <p v-if="stateOfPlay === 'failed'" class="game-over">Game over!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import getRandomNumber from "./helpers/getRandomNumber";
import { DELAY, STEP } from "./helpers/variables";
import sound1 from "./sounds/1.ogg";
import sound2 from "./sounds/2.ogg";
import sound3 from "./sounds/3.ogg";
import sound4 from "./sounds/4.ogg";

export default {
  name: "App",
  components: {},
  data() {
    return {
      round: 0,
      stateOfPlay: "none",
      currentLevel: "easy",
      currentSpeed: 1500,
      activeButton: "",
      levels: {
        easy: { type: "radio", label: "Easy", value: "easy", speed: 1500 },
        middle: {
          type: "radio",
          label: "Middle",
          value: "middle",
          speed: 1000,
        },
        hard: { type: "radio", label: "Hard", value: "hard", speed: 400 },
      },
      buttons: [
        { color: "red", sound: sound1 },
        { color: "blue", sound: sound2 },
        {
          color: "yellow",
          sound: sound3,
        },
        {
          color: "green",
          sound: sound4,
        },
      ],
      userSteps: [],
      stepsOfPlay: {
        sounds: [],
        colors: [],
      },
    };
  },
  methods: {
    startPlay() {
      this.stateOfPlay = "preparing";
    },
    createStep() {
      const { colors, sounds } = this.stepsOfPlay;
      const maxIndex = this.buttons.length - 1;
      const random = getRandomNumber(maxIndex);
      const { color, sound } = this.buttons[random];
      colors.push(color);
      sounds.push(sound);
      this.stateOfPlay = "playing";
    },
    playStep() {
      const { colors, sounds } = this.stepsOfPlay;
      sounds.forEach((sound, i) => {
        setTimeout(
          () => this.activateButton(sound, colors[i]),
          this.currentSpeed * (i + STEP)
        );
      });
      setTimeout(
        () => (this.stateOfPlay = "entering"),
        this.currentSpeed * sounds.length
      );
    },
    playSound(sound) {
      const audio = new Audio(sound);
      return audio.play();
    },
    activateButton(sound, color) {
      this.activeButton = color;
      const audio = this.playSound(sound);
      audio.then(() =>
        setTimeout(() => (this.activeButton = ""), DELAY.ACTIVE_COLOR)
      );
    },
    addUserStep({ target }) {
      const color = target.dataset.color;
      if (!color) return;
      this.userSteps.push(color);
      const { sound } = this.buttons.filter(
        (button) => button.color === color
      )[0];
      this.activateButton(sound, color);
    },
    checkUserSteps() {
      const allRight = this.userSteps.every(
        (step, i) => step === this.stepsOfPlay.colors[i]
      );
      const countSteps =
        this.userSteps.length === this.stepsOfPlay.colors.length;
      if (!allRight) this.stateOfPlay = "failed";
      if (allRight && !countSteps) this.stateOfPlay = "entering";
      if (allRight && countSteps) {
        this.userSteps = [];
        this.stateOfPlay = "preparing";
      }
    },
  },
  computed: {
    disabledButton() {
      return !(this.stateOfPlay === "none" || this.stateOfPlay === "failed");
    },
  },
  watch: {
    stateOfPlay() {
      switch (this.stateOfPlay) {
        case "preparing": {
          this.round++;
          this.createStep();
          break;
        }
        case "playing": {
          setTimeout(() => this.playStep(), DELAY.BETWEEN_ROUNDS);
          break;
        }
        case "checking": {
          this.checkUserSteps();
          break;
        }
        case "failed": {
          this.userSteps = [];
          this.round = 0;
          this.stepsOfPlay = { colors: [], sounds: [] };
          break;
        }
      }
    },
    userSteps() {
      if (this.userSteps.length > 0) {
        this.stateOfPlay = "checking";
      }
    },
    currentLevel() {
      this.currentSpeed = this.levels[this.currentLevel].speed;
      console.log(this.currentSpeed);
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #323232;
  color: #ffffff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
#app {
  margin-left: 80px;
}

.play {
  margin: 0 auto;
  max-width: 1200px;
}

.wrapper {
  display: flex;
}

.title {
  font-size: 64px;
  margin: 0;
  padding-top: 50px;
}
.options {
  margin-top: 40px;
  flex-basis: 40%;
}

.game-over {
  font-size: 46px;
  color: #ff9e9e;
  text-align: center;
  font-weight: 600;
  word-spacing: 2%;
  text-transform: uppercase;
}

.settings {
  &__buttons {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  &__button {
    list-style: none;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 300;
  }

  &__title {
    font-size: 32px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 20px;
  }
}

.round {
  font-size: 40px;
  color: #9effb6;
  margin-bottom: 40px;
}

.buttons {
  display: grid;
  grid-template-columns: 200px 200px;
  flex-basis: 60%;
  width: 100%;
  max-height: 400px;
}
.button {
  border: 3px solid #323232;
  height: 200px;
  opacity: 0.6;

  &--red {
    background-color: #ff9e9e;
    border-top-left-radius: 100%;
  }
  &--blue {
    background-color: #bd9eff;
    border-top-right-radius: 100%;
  }
  &--yellow {
    background-color: #ffff99;
    border-bottom-left-radius: 100%;
  }
  &--green {
    background-color: #9effb6;
    border-bottom-right-radius: 100%;
  }
}
.active {
  opacity: 1;
}

.button-start {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 60px 50px;
  border-radius: 100%;
  border: 0;
  color: #323232;
  font-size: 24px;
  background-color: #ffff99;
  margin-top: 50px;
  margin-left: 200px;

  &:disabled {
    opacity: 0.55;
  }
}
</style>
