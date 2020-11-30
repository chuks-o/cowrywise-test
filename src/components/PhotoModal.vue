<template>
  <!-- The Modal -->
  <div :id="`myModal-${id}`" class="modal">
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
      default: "",
      required: false
    },
    photo: {
      type: Object,
      required: false
    }
  },
  mounted() {
    // Get the modal
    const modal = document.getElementById(`myModal-${this.id}`);

    const btn = document.getElementById(`myBtn-${this.id}`);

    const span = modal.firstChild;

    btn.onclick = function() {
      modal.style.display = "block";
    };

    span.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
};
</script>

<style lang="scss">
/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 3;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

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
</style>
