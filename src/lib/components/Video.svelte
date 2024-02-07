<style>
  .video-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>

<script lang="ts">
  export let videoId: string
  export let title: string
</script>

<div class="video-container">
  <iframe
    title={title}
    src={`https://www.youtube.com/embed/${videoId}`}
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>
