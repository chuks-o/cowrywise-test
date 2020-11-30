<template>
  <!-- The Modal -->
  <div :id="`myModal-${id}`" class="modal hideModal">
    <!-- Modal content -->
    <span class="close">&times;</span>
    <div class="modal-content">
      <div class="modal-body">
        <div class="modal-body--image">
          <img :src="photo.urls.regular" alt="image" />
        </div>
        <div class="modal-body--text">
          <p class="modal-body--header">
            {{ photo.user.first_name }} {{ photo.user.last_name }}
          </p>
          <p class="modal-body--location">{{ photo.user.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    },
    photo: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // Get the modal
    const modal = document.getElementById(`myModal-${this.id}`);

    const btn = document.getElementById(`myBtn-${this.id}`);
    const span = modal.firstChild;

    btn.onclick = function() {
      modal.classList.remove("hideModal");
      modal.classList.add("showModal");
    };

    span.onclick = function() {
      modal.classList.remove("showModal");
      modal.classList.add("hideModal");
    };

    window.onclick = function() {
      modal.classList.remove("showModal");
      modal.classList.add("hideModal");
    };
  }
  // methods: {
  //   openModal() {
  //   },
  //   closeModal() {}
  // }
};
</script>

<style lang="scss">
/* The Modal (background) */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);

  &.hideModal {
    opacity: 0;
    z-index: -1;
    // animation: hide 0.25s;
    // transform: scale(0);
  }
  @keyframes hide {
    from {
      transform: scale(1);
      opacity: 1;
      z-index: 2;
    }
    to {
      transform: scale(0);
      opacity: 0;
      z-index: -1;
    }
  }

  &.showModal {
    opacity: 1;
    z-index: 2;
    animation: show 0.2s;
    transform: scale(1);
  }
  @keyframes show {
    from {
      transform: scale(0);
      opacity: 0;
      z-index: -1;
    }
    to {
      transform: scale(1);
      opacity: 1;
      z-index: 2;
    }
  }
  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border-radius: 6px;
    width: 70%;
    .modal-body {
      width: 100%;
      .modal-body--image {
        width: 100%;
        height: 500px;
        img {
          width: 100%;
          min-width: 100%;
          object-fit: cover;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          height: 500px;
        }
      }
      .modal-body--text {
        background: var(--white);
        padding: 20px 30px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        .modal-body--header {
          font-weight: 600;
          font-size: 18px;
          padding: 0px 0px 2px 0px;
          margin: 0;
          text-align: left;
          z-index: 1;
        }
        .modal-body--location {
          margin: 0;
          padding: 2px 0px;
          font-weight: 600;
          font-size: 14px;
          text-align: left;
          opacity: 0.5;
          z-index: 1;
        }
      }
    }
  }

  /* The Close Button */
  .close {
    color: var(--white);
    position: absolute;
    right: 10%;
    top: 5%;
    font-size: 28px;
    font-weight: normal;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
}

@media only screen and (max-width: 600px) {
  .modal {
    column-count: 1;
    .modal-content {
      width: 85%;
    }
    .close {
      right: 5%;
      top: 4%;
    }
  }
}
</style>
