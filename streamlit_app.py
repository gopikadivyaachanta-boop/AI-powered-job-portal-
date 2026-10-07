"""Streamlit entrypoint.

This file exists to support commands like:
  python -m streamlit run streamlit_app.py

The actual app is implemented in prompts_app/prompts_app/promptapp.py.
"""

from pathlib import Path
import runpy

HERE = Path(__file__).resolve().parent
TARGET = HERE / "prompts_app" / "prompts_app" / "promptapp.py"

if not TARGET.exists():
    raise FileNotFoundError(
        f"Expected Streamlit app at: {TARGET}. "
        "Update streamlit_app.py or ensure the prompts_app package is present."
    )

runpy.run_path(str(TARGET), run_name="__main__")

