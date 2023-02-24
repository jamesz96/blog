<style>
  .video-container {
    height: 474px;
    width: 100%;
  }

  .video-container iframe {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>

<script lang="ts">
  export let videoId: string
</script>

<div class="video-container">
  <iframe
    title="Youtube video"
    src={`https://www.youtube.com/embed/${videoId}`}
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>
